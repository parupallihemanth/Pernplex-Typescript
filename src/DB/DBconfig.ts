import { Pool } from 'pg';

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Pernflix",
  password: "hemanth",
  port: 5432,
})

