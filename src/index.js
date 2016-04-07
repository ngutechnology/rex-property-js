require('dotenv').config({ silent: true });

const RPC = require('./rpc');
const SERVICES_TREE = require('./services');


const Rex = {
    SERVICES: Object.keys(SERVICES_TREE),
    
    token: null,
    
    
    login (email, password) {
        return Rex.Authentication.login({ email: email, password: password});
    }
};


// Configure services
Rex.SERVICES.forEach((service_name) => {
    let template = SERVICES_TREE[service_name];
    let service = {};
    
    // A service can always be described
    let method_names = Object.keys(template.methods);
    
    if (typeof method_names.describe === "undefined") {
        template.methods.describe = ['include_detail'];
    }
    
    method_names.forEach((method_name) => {
        let parameters = template.methods[method_name];
        
        service[method_name] = function (args) {
            // Call the actual service
            return RPC.call(`${service_name}::${method_name}`, args, Rex.token);
        };
    });
    
    Rex[service_name] = service;
});


// Override the Authentication functions to catch the token
Rex.Authentication.login = (args) => {
    args.application = 'rex';
    return new Promise((accept, reject) => {
        RPC.call('Authentication::login', args).then((token) => {
            Rex.token = token;
            accept(token);
        }).catch(e => reject(e));
    });
};

Rex.Authentication.logout = () => {
    return new Promise((accept, reject) => {
        RPC.call('Authentication::logout').then(() => {
            Rex.token = null;
            accept();
        }).catch(e => reject(e));
    });
};


module.exports = Rex;