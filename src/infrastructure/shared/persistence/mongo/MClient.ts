/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { MongoClient, Db } from 'mongodb'
import { injectable } from 'tsyringe'

@injectable()
export class MClient {
  private db: Db

  constructor(private client: MongoClient, private dbName: string) {
    this.db = this.client.db(dbName)
  }

  getDatabase(): Db {
    return this.db
  }
}
