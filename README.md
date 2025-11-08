# Proyecto: Sistema de Registro de Usuarios

**Tecnologías:** Node.js · Express · PostgreSQL · React

---

## Descripción

Este proyecto es una aplicación web completa que permite registrar usuarios en una base de datos PostgreSQL mediante una API REST creada con Node.js y Express.
Además, incluye una interfaz desarrollada en React que permite realizar el registro de forma visual y sencilla.

El objetivo es mostrar el funcionamiento integrado entre **frontend (React)**, **backend (Node.js)** y **base de datos (PostgreSQL)**.

---

## Requisitos previos

Antes de instalar y ejecutar el proyecto, asegúrate de tener instalado:

* [Node.js](https://nodejs.org/) (versión 16 o superior)
* [PostgreSQL](https://www.postgresql.org/download/)
* [pgAdmin 4](https://www.pgadmin.org/download/)

---

## Configuración de la base de datos

1. Abre **pgAdmin 4** y crea una base de datos llamada:

   ```sql
   CREATE DATABASE usuarios_db;
   ```

2. Dentro de esa base de datos, crea la tabla:

   ```sql
   CREATE TABLE usuarios (
     id SERIAL PRIMARY KEY,
     nombre VARCHAR(50),
     correo VARCHAR(100),
     contrasena VARCHAR(100)
   );
   ```

3. Verifica la conexión probando una consulta:

   ```sql
   SELECT * FROM usuarios;
   ```

---

## Instalación del Backend (Node.js + Express)

1. Abre una terminal dentro de la carpeta `servidor-usuarios`:

   ```bash
   cd servidor-usuarios
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Ejecuta el servidor:

   ```bash
   node server.js
   ```

   o si tienes nodemon:

   ```bash
   npx nodemon server.js
   ```

4. El servidor se iniciará en:

   ```
   http://localhost:3000
   ```

---

## Instalación del Frontend (React)

1. Abre otra terminal y entra en la carpeta del cliente:

   ```bash
   cd cliente-usuarios
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Ejecuta el proyecto React:

   ```bash
   npm start
   ```

4. La aplicación se abrirá automáticamente en el navegador en:

   ```
   http://localhost:3001
   ```

---

## Uso del sistema

1. Abre el formulario en `http://localhost:3001`.
2. Ingresa los datos:

   * **Nombre**
   * **Correo**
   * **Contraseña**
3. Haz clic en **Registrar**.
4. Si la conexión con el backend y la base de datos es correcta, aparecerá el mensaje:

   > Usuario registrado correctamente
5. En **pgAdmin**, puedes verificar los registros con:

   ```sql
   SELECT * FROM usuarios;
   ```

---

## Tecnologías utilizadas

| Componente         | Tecnología        |
| ------------------ | ----------------- |
| Lenguaje principal | JavaScript (ES6+) |
| Backend            | Node.js + Express |
| Base de datos      | PostgreSQL        |
| Frontend           | React             |
| Comunicación       | API REST / JSON   |
| Cliente de prueba  | Postman           |

---

## Autor

**ALAN JOSUE ESPINOZA ZAMBRANO**

---

## Comandos rápidos

| Acción                         | Comando          |
| ------------------------------ | ---------------- |
| Instalar dependencias backend  | `npm install`    |
| Ejecutar backend               | `node server.js` |
| Instalar dependencias frontend | `npm install`    |
| Ejecutar frontend              | `npm start`      |

---

### Nota importante

Si React intenta usar el mismo puerto 3000 que el backend, acepta cambiarlo cuando aparezca el mensaje:

> “Would you like to run the app on another port instead?”
> Presiona **Y** para usar el puerto **3001**.

---

**Resultado final:**
El sistema integra correctamente el backend y frontend, permitiendo registrar usuarios en tiempo real desde el navegador hacia PostgreSQL.
