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

### Run

| Command        | Description                          |
|----------------|--------------------------------------|
| `npm run dev`  | Development server with **nodemon**  |
| `npm start`    | Production-style run with **node**   |

By default the server listens on **port 3000** (or the port set in `PORT`).

### Optional: seed data

Sample users and products can be loaded with:

```bash
node bin/seeds.js
```

> The seed script uses its own MongoDB URI inside `bin/seeds.js`. Align that URI with your environment if you do not use `mongodb://localhost/project2`.

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

### Ejecución

| Comando       | Descripción                                    |
|---------------|------------------------------------------------|
| `npm run dev` | Servidor de desarrollo con **nodemon**         |
| `npm start`   | Ejecución tipo producción con **node**         |

Por defecto el servidor escucha en el **puerto 3000** (o el definido en `PORT`).

### Opcional: datos de prueba

Para cargar usuarios y productos de ejemplo:

```bash
node bin/seeds.js
```

> El script de seeds tiene la URI de MongoDB definida en `bin/seeds.js`. Ajusta esa URI a tu entorno si no usas `mongodb://localhost/project2`.

### Stack tecnológico (resumen)

Express, EJS, Mongoose, express-session, connect-mongo, Passport (estrategia local), Multer, Bootstrap (recursos del proyecto).
