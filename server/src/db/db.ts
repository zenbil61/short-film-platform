import knex from 'knex';
import config from './knexFile';

// Development ortamı için yapılandırmayı seçin
const environment = process.env.NODE_ENV || 'development';
const db = knex(config[environment]);

export default db;