# REX Software

Interface with REX Software's property management API.


## Usage

```javascript
const Rex = require('rex-property');
```

Services and methods map against the REX API directly and respond using Promises.

For example:

```javascript
Rex.Authentication.login({ email: 'test@test.com', password: 'password' });

// And then elsewhere...
Rex.Properties.search().then((results) => {
    console.log(`${results.total} Total`);
    console.log(results.rows);
}).catch(e => console.log(e));
```

[For details, check out the actual API docs](http://apibrowser.dev.rexsoftware.com/#api=https%3A//api.rexsoftware.com/rex.php)


## Development

Once you have been set up on the Rex test environment, create a `.env` file with 
your test account email and password:

```
NODE_ENV=development
EMAIL=test@test.com
PASSWORD=password
```