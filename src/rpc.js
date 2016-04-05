const Request = require('request');

const STAGING_URL = "https://api-demo.rexsoftware.com/rex.php";
const LIVE_URL = "https://api.rexsoftware.com/rex.php";


var url = LIVE_URL;
if (['test', 'development', 'staging'].indexOf(process.env.NODE_ENV) > -1) {
    url = STAGING_URL;
}

const RPC = {
    call (method, args, token, use_status_codes, use_strict_arguments) {
        args = {
            args: args,
            method: method,
            token: token
        };
        
        return new Promise((accept, reject) => {
            Request.post(url, { form: args }, (err, response, body) => {
                if (err) return reject(err);
                
                body = JSON.parse(body);
                
                if (body.error) return reject(body.error);
                
                accept(body.result);
            });
        });
    }
};


module.exports = RPC;