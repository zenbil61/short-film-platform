import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'zenbil61',
      password: '31423142',
      database: 'scenario',
    },
    debug: true, // tüm sorgular otomatik konsola yazdırılır
  },
};

export default config;