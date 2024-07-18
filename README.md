# Express JWT Server

A basic Node.js application using Express.js with JWT authentication. This project includes user authentication with JSON Web Tokens (JWT) and database integration using PostgreSQL and Sequelize ORM.

## Features

- User login with JWT token generation
- User creation endpoint
- Protected route requiring JWT authentication
- Swagger documentation for API endpoints

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/express-jwt-server.git
   cd express-jwt-server
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```
3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```env
   PORT=3000
   DB_HOST=localhost
   DB_NAME=your_database_name
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   SECRET_KEY=your_jwt_secret_key
   ```
4. **Create and migrate the database:**

   Make sure your PostgreSQL server is running, and then sync the database schema:

   ```bash
   node src/util/db.js
   ```
5. **Run the server:**

   ```bash
   npm start
   ```

   Alternatively, for development with auto-reloading:

   ```bash
   npm run dev
   ```

### API Endpoints

- **POST /api/users/login**

  Logs in a user and returns a JWT token.

  **Request Body:**

  ```json
  {
      "username": "user",
      "password": "password"
  }
  ```

  **Responses:**

  - `200 OK` with JSON containing the token
  - `400 Bad Request` if credentials are invalid
  - `500 Internal Server Error` for server issues
- **POST /api/users**

  Creates a new user.

  **Request Body:**

  ```json
  {
      "username": "user",
      "password": "password"
  }
  ```

  **Responses:**

  - `200 OK` if user is created successfully
  - `400 Bad Request` if request is invalid or user already exists
  - `500 Internal Server Error` for server issues
- **GET /protected**

  A protected route that requires a valid JWT token.

  **Headers:**

  ```plaintext
  Authorization: Bearer <token>
  ```

  **Responses:**

  - `200 OK` if the token is valid
  - `401 Unauthorized` if no token is provided
  - `403 Forbidden` if the token is invalid

### Swagger Documentation

Swagger documentation is available at `/api-docs`. You can use this to interactively test API endpoints and view the API documentation.

### Running Tests

To run the tests:

```bash
npm test
```
# jwt
