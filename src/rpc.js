const Request = require('request');

const STAGING_URL = "https://api-demo.rexsoftware.com/rex.php";
const LIVE_URL = "https://api.rexsoftware.com/rex.php";


const RPC = {
    url: LIVE_URL,
    
    
    setUrl (url) {
        if (typeof url == "undefined") return;
        if (url == "") return;
        
        if (['demo', 'test', 'development', 'staging'].contains(url)) {
            RPC.url = STAGING_URL
        } else {
            RPC.url = url;
        }
    },
    
    
    call (method, args, token, use_status_codes, use_strict_arguments) {
        args = {
            args: args,
            method: method,
            token: token
        };
        
        return new Promise((resolve, reject) => {
            Request.post(RPC.url, { form: args }, (err, response, body) => {
                if (err) return reject(err);
                
                body = JSON.parse(body);
                
                if (body.error) return reject(body.error);
                
                resolve(body.result);
            });
        });
    }
};


module.exports = RPC;