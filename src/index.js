require('dotenv').config({ silent: true });

const RPC = require('./rpc');
const SERVICES_TREE = require('./services');


const Rex = {
    SERVICES: Object.keys(SERVICES_TREE),
    
    token: null,
    
    
    // Shortcut for Authentication.login()
    login (email, password) {
        return Rex.Authentication.login({ email: email, password: password});
    },
    
    
    // Geo information is in the form POINT([lat] [lng]) so let's convert it
    // to { lat: [lat], lng: [lng] }
    point_to_location (point) {
        if (!point || point == '' || point.indexOf('POINT') === -1) return { lat: null, lng: null };
        
        point = point.replace('POINT(', '').replace(')', '').split(' ');
        return { lat: parseFloat(point[0]), lng: parseFloat(point[1]) };
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
        
        service[method_name] = function (id_or_args, args) {
            if (arguments.length == 2) {
                args.id = id_or_args;
            } else {
                args = id_or_args;
            }
            
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