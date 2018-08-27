import dotenv from 'dotenv';
import { Pool } from 'pg';
import { NOTFOUND } from 'dns';

dotenv.config();

// const connectionString = process.env.DATABASE_URL;
// const pool = new Pool({
//   connectionString,

// });

let connectionString = process.env.DATABASE_URL;
if (process.NODE_ENV) {
  if (process.NODE_ENV.trim() === 'test') connectionString = process.env.DATABASE_URL_TEST;

  if (process.NODE_ENV.trim() === 'production') connectionString = process.env.PRODUCTION;
}
const pool = new Pool({
  connectionString,

});


export default pool;
