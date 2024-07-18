require('dotenv').config()
const dbName = process.env.DB_NAME || "jwt"
    dbUser = process.env.DB_USER || "postgres"
    dbPassword = process.env.DB_PASS || "1"
    dbHost = process.env.DB_HOST || "localhost"
    dbDialect = process.env.DB_DIALECT || "postgres"
    secretKey = process.env.SECRET_KEY || "key"

module.exports = {
    dbName,
    dbUser,
    dbPassword,
    dbHost,
    dbDialect,
    secretKey
}
