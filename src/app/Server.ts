import { json, urlencoded } from 'body-parser'
import cors from 'cors'
import express, { Request, Response, Router } from 'express'
import helmet from 'helmet'
import * as http from 'http'

import { MongoClient } from 'mongodb'
import { HttpResponse } from './routes/HttpResponse'
import { registerRoutes } from './routes'
import { MClient } from '../infrastructure/shared/persistence/mongo/MClient'
import { dbConfig } from '../infrastructure/shared/config'

export class Server {
  private readonly express: express.Express
  private httpServer?: http.Server
  private mongoClient: Promise<MongoClient>

  constructor(private readonly port: string) {
    this.express = express()
    this.express.use(helmet())
    this.express.use(cors())
    this.express.use(json())
    this.express.use(urlencoded({ extended: true }))
    const router = Router()
    this.express.use(router)
    registerRoutes(router)
    router.use(
      (err: Error, _req: Request, res: Response, _next: () => void) => {
        // eslint-disable-next-line no-console
        console.log(err)
        HttpResponse.Error(res, 'Contact to an admin')
      }
    )
    this.express.use(
      (err: Error, _req: Request, res: Response, _next: () => void) => {
        // eslint-disable-next-line no-console
        console.log(err)
        HttpResponse.Error(res, 'Server error')
      }
    )
  }

  async listen(): Promise<void> {
    await new Promise<void>((resolve) => {
      this.httpServer = this.express.listen(this.port, () => {
        // eslint-disable-next-line no-console
        console.log(
          `✅ Backend App is running at http://localhost:${
            this.port
          } in ${this.express.get('env')} mode`
        )
        // eslint-disable-next-line no-console
        console.log('✋ Press CTRL-C to stop\n')

        resolve()
      })
    })
  }

  getHTTPServer(): Server['httpServer'] {
    return this.httpServer
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close((error) => {
          if (error) {
            reject(error)

            return
          }

          resolve()
        })
      }
    })
  }
  private initDb():void {
    this.
  }
}
