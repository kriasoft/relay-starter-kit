# Database Access and Connection Pooling

#### Usage example:

```js
import pool, * as db from './db';
```

```js
let client;
try {
  client = await pool.connect();
  const user = await db.users.findById(client, 123);
  // user => { id: 123, email: 'hello@example.com' };
} finally {
  if (client) client.release();
}
```

For more information visit [`pg`](https://github.com/brianc/node-postgres)
([docs](https://github.com/brianc/node-postgres/wiki)) and
[`pg-pool`](https://github.com/brianc/node-pg-pool) projects.