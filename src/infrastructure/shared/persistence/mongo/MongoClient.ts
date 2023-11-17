import { MongoClient } from 'mongodb'
import { dbConfig } from '../../config'

export const client = new MongoClient(dbConfig.url)
