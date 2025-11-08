import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());

// Ruta raíz
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente");
});

// Crear usuario
app.post("/usuarios", async (req, res) => {
  const { nombre, correo, contraseña } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO usuarios (nombre, correo, contraseña) VALUES ($1, $2, $3) RETURNING *",
      [nombre, correo, contraseña]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al registrar usuario" });
  }
});

// Listar usuarios
app.get("/usuarios", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM usuarios ORDER BY id ASC");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
});

const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Servidor escuchando en http://localhost:${PORT}`)
);
