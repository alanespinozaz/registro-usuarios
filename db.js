import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  user: "postgres",         // tu usuario
  host: "localhost",        // o 127.0.0.1
  database: "usuarios_db",  // nombre de tu base
  password: "123456789",// reemplaza por la tuya
  port: 5432,
});
