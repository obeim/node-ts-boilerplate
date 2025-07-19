# Node.js TypeScript API Boilerplate

This is Express REST API boilerplate built with TypeScript, Express, TypeORM, PostgreSQL, and Redis. It includes authentication, user management, caching, validation, error handling, and is fully dockerized for easy deployment.

## Features

- **TypeScript** for type safety and modern JavaScript features
- **Express** for building RESTful APIs
- **TypeORM** for database ORM and migrations
- **PostgreSQL** as the main database
- **Redis** for caching user data
- **JWT Authentication** for secure login
- **Input validation** using Joi
- **Centralized error handling**
- **Docker & Docker Compose** for containerized development

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

### Environment Variables

Create a `.env` file in the root directory and set the following variables:

```
PORT=3000
JWT_SECRET=your_jwt_secret
DB_USER=postgres
DB_PASSWORD=your_db_password
DB_NAME=mylocaldb
```

### Running with Docker

```
docker-compose up --build
```

The API will be available at `http://localhost:3000`.

### Local Development

1. Install dependencies:
   ```
   npm install
   ```
2. Start PostgreSQL and Redis (or use Docker Compose)
3. Run migrations:
   ```
   npm run build
   npm run migration:run
   ```
4. Start the server:
   ```
   npm run dev
   ```

## API Endpoints

### Auth

- `POST /api/v1/login` — Login with email and password

### Users (JWT required)

- `GET /api/v1/users` — List all users
- `GET /api/v1/users/:id` — Get user by ID
- `GET /api/v1/users/profile` — Get current user profile
- `POST /api/v1/users` — Create a new user
- `DELETE /api/v1/users/:id` — Delete a user

### Request Validation

All endpoints validate input using Joi schemas. Invalid requests return 400 errors.

### Caching

User data is cached in Redis for 30 seconds to improve performance.

## Project Structure

- `src/` — Source code
  - `config/` — App, DB, and Redis config
  - `controllers/` — Route handlers
  - `db/` — TypeORM data source, entities, migrations
  - `helpers/` — Utility functions and validation schemas
  - `middlewares/` — Express middlewares (auth, error, caching, validation)
  - `routes/` — API route definitions
  - `server/` — Express app setup
  - `services/` — Business logic
  - `types/` — TypeScript type definitions

## Scripts

- `npm run dev` — Start in development mode (with nodemon)
- `npm run build` — Compile TypeScript
- `npm start` — Start compiled app
- `npm run migration:run` — Run TypeORM migrations
- `npm run migration:revert` — Revert last migration

## License

MIT
