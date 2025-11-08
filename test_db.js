import { pool } from "./db.js";

const probarConexion = async () => {
  const resultado = await pool.query("SELECT * FROM usuarios");
  console.log(resultado.rows);
};

probarConexion();
