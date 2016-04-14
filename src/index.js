require('dotenv').config({ silent: true });

const RPC = require('./rpc');
const SERVICES_TREE = require('./services');


const Rex = {
    SERVICES: Object.keys(SERVICES_TREE),
    
    email: null,
    password: null,
    token: null,
    
    // Connect to Rex
    connect (email, password) {
        Rex.email = email;
        Rex.password = password;
        
        Rex.Authentication.login({ email: Rex.email, password: Rex.password });
        return Rex;
    },
    
    
    // Geo information is in the form POINT([lat] [lng]) so let's convert it
    // to { lat: [lat], lng: [lng] }
    pointToLocation (point) {
        if (!point || point == '' || point.indexOf('POINT') === -1) return { lat: null, lng: null };
        
        point = point.replace('POINT(', '').replace(')', '').split(' ');
        return { lat: parseFloat(point[0]), lng: parseFloat(point[1]) };
    },
    
    
    // Internal use for authing with Rex automatically for each request
    _auth () {
        return Rex.Authentication.login({ email: Rex.email, password: Rex.password });
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
            
            if (service_name == "Authentication" || Rex.token !== null) {
                // Call the actual service
                return RPC.call(`${service_name}::${method_name}`, args, Rex.token);
            } else {
                return new Promise((accept, reject) => {
                    Rex._auth().then(() => {
                        // Call the actual service
                        return accept(RPC.call(`${service_name}::${method_name}`, args, Rex.token));
                    }).catch(e => reject(e));
                });
            }
        };
    });
    
    Rex[service_name] = service;
});


// Override the Authentication functions to catch the token
Rex.Authentication.login = (args) => {
    args.application = 'rex';
    return new Promise((accept, reject) => {
        RPC.call('Authentication::login', args).then((token) => {
            Rex.email = null;
            Rex.password = null;
            Rex.token = token;
            accept(token);
        }).catch(e => reject(e));
    });
};

Rex.Authentication.logout = () => {
    return new Promise((accept, reject) => {
        RPC.call('Authentication::logout').then(() => {
            Rex.email = null;
            Rex.password = null;
            Rex.token = null;
            accept();
        }).catch(e => reject(e));
    });
};


module.exports = Rex;