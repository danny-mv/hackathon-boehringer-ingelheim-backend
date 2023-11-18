const appConfig = {
  port: process.env.PORT ?? '3001',
  jwtKey: process.env.JWT_KEY,
  jwtExpiration: process.env.JWT_EXPIRATION,
}

const dbConfig = {
  url:
    process.env.MONGO_URL ??
    'mongodb+srv://razondpro:GaRAiAk25pOe8Bgv@test.wfsdiiz.mongodb.net/fit_journey?authSource=admin',
}

const bcryptConfig = {
  saltRounds: 10,
}

export { appConfig, dbConfig, bcryptConfig }
