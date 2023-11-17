const appConfig = {
  port: process.env.PORT,
  jwtKey: process.env.JWT_KEY,
  jwtExpiration: process.env.JWT_EXPIRATION,
}

const dbConfig = {
  url: process.env.MONGO_URL ?? 'localhost',
}

const bcryptConfig = {
  saltRounds: 10,
}

export { appConfig, dbConfig, bcryptConfig }
