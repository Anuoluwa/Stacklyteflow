import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

let connectionString = process.env.DATABASE_URL;

if (process.NODE_ENV) {
  if (process.NODE_ENV.trim() === 'test') connectionString = process.env.ELEPHANT_TEST;

  if (process.NODE_ENV.trim() === 'production') connectionString = process.env.PRODUCTION;
}
const pool = new Pool({
  connectionString,
});

export default pool;
