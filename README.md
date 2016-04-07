# REX Property API

Interface with REX Software's property management API.


## Usage

```javascript
const Rex = require('rex-property');
```

Services and methods map against the REX API directly and respond using Promises.

You will need to acquire a REX account before using the API.

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

You need to get an account for the REX test environment and then enter the details into `.env` (check the example `.env.example`).