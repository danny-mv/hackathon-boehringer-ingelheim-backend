// eslint-disable-next-line import/no-extraneous-dependencies
import 'reflect-metadata'
import { Server } from './app/Server'
import { appConfig } from './config/envs'
import { DependencyInjection } from './config/DependencyInjection'

DependencyInjection.RegisterDependencies().then(() => {
  const server = new Server(appConfig.port)
  server.listen()
})
