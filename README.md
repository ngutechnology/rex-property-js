# REX Property API

Interface with REX Software's property management API.


## Usage (as of 2.0.0)

Services and methods map against the REX API directly and respond using Promises.

You will need to acquire a REX account before using the API.

For example:

```javascript
const Rex = require('rex-property').connect(process.env.REX_EMAIL, process.env.REX_PASSWORD);
```

...and then something like:

```javascript
Rex.Properties.search().then((results) => {
    console.log(`${results.total} Total`);
    console.log(results.rows);
}).catch(e => console.log(e));
```

[For details, check out the actual API docs](http://apibrowser.dev.rexsoftware.com/#api=https%3A//api.rexsoftware.com/rex.php)


## Development

You need to get an account for the REX test environment and then enter the details into `.env` (check the example `.env.example`).