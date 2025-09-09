require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT || 5432),
});

async function ensureSchema() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id SERIAL PRIMARY KEY,
      nome TEXT NOT NULL,
      salario NUMERIC(12,2) NOT NULL DEFAULT 0,
      idade INT NOT NULL
    );
  `);
}

const query = (text, params) => pool.query(text, params);

module.exports = { query, ensureSchema };
