# Proyecto-2

Express web app with EJS views, MongoDB (Mongoose), sessions, Passport (local auth), and a shopping-cart flow.

---

## English

### Prerequisites

- **Node.js** (current LTS recommended)
- **MongoDB** running locally or a connection string (e.g. MongoDB Atlas)

### Setup

1. Clone the repository and install dependencies:

   ```bash
   git clone <repository-url>
   cd Proyecto-2
   npm install
   ```

2. Create a `.env` file in the project root. The app reads **`dbURL`** (Mongo connection string), for example:

   ```env
   dbURL=mongodb://127.0.0.1:27017/project2
   ```

   Optional:

   ```env
   PORT=3000
   ```

3. Start MongoDB if you use a local database, and ensure the URI in `dbURL` points to the same host, port, and database name you intend to use.

#### MongoDB service (local)

If nothing is listening on **port 27017**, the app will fail with **`ECONNREFUSED`**. Install MongoDB locally or use Atlas; for a **Homebrew** install on macOS, manage the background service with:

| Action | Command |
|--------|---------|
| Start (login item, survives reboot) | `brew services start mongodb-community` |
| Stop | `brew services stop mongodb-community` |
| Restart | `brew services restart mongodb-community` |
| Status | `brew services list` (look for `mongodb-community` — `started` is OK) |

Check the database from a shell: `mongosh` then `db.runCommand({ ping: 1 })`.

On **Linux** (package `mongodb-org`), the service is often `mongod`, for example: `sudo systemctl start mongod` and `sudo systemctl status mongod`.

### Run

| Command | Description |
|---------|-------------|
| `npm run dev` or `yarn dev` | Development server with **nodemon** |
| `npm start` or `yarn start` | Production-style run with **node** |

By default the server listens on **port 3000** (or the port set in `PORT`).

### Optional: seed data

Sample users and products can be loaded with:

```bash
node bin/seeds.js
```

The seed script reads **`dbURL`** from `.env` (same as the app), with a fallback to `mongodb://localhost/project2` if unset.

### Tech stack (high level)

Express, EJS, Mongoose, express-session, connect-mongo, Passport (local strategy), Multer, Bootstrap (via project assets).

---

## Español

### Requisitos

- **Node.js** (se recomienda la versión LTS actual)
- **MongoDB** en local o una cadena de conexión (por ejemplo MongoDB Atlas)

### Instalación

1. Clona el repositorio e instala dependencias:

   ```bash
   git clone <url-del-repositorio>
   cd Proyecto-2
   npm install
   ```

2. Crea un fichero `.env` en la raíz del proyecto. La aplicación usa la variable **`dbURL`** (cadena de conexión a MongoDB), por ejemplo:

   ```env
   dbURL=mongodb://127.0.0.1:27017/project2
   ```

   Opcional:

   ```env
   PORT=3000
   ```

3. Arranca MongoDB si usas base de datos local y comprueba que la URI de `dbURL` coincide con el host, puerto y nombre de base de datos que quieras usar.

#### Servicio de MongoDB (local)

Si no hay nada escuchando en el **puerto 27017**, la aplicación fallará con **`ECONNREFUSED`**. Instala Mongo en local o usa Atlas; con **Homebrew** en macOS, el servicio en segundo plano se gestiona así:

| Acción | Comando |
|--------|---------|
| Arrancar (se inicia al iniciar sesión y tras reinicios) | `brew services start mongodb-community` |
| Parar | `brew services stop mongodb-community` |
| Reiniciar | `brew services restart mongodb-community` |
| Estado | `brew services list` (busca `mongodb-community` — `started` es correcto) |

Comprueba la base desde terminal: `mongosh` y luego `db.runCommand({ ping: 1 })`.

En **Linux** (paquete `mongodb-org`), el servicio suele llamarse `mongod`, por ejemplo: `sudo systemctl start mongod` y `sudo systemctl status mongod`.

### Ejecución

| Comando | Descripción |
|---------|-------------|
| `npm run dev` o `yarn dev` | Servidor de desarrollo con **nodemon** |
| `npm start` o `yarn start` | Ejecución tipo producción con **node** |

Por defecto el servidor escucha en el **puerto 3000** (o el definido en `PORT`).

### Opcional: datos de prueba

Para cargar usuarios y productos de ejemplo:

```bash
node bin/seeds.js
```

El script de seeds lee **`dbURL`** del `.env` (igual que la aplicación), con respaldo a `mongodb://localhost/project2` si no está definida.

### Stack tecnológico (resumen)

Express, EJS, Mongoose, express-session, connect-mongo, Passport (estrategia local), Multer, Bootstrap (recursos del proyecto).
