import { MongoClient } from 'mongodb'
import { container } from 'tsyringe'
import { client } from '../../infrastructure/shared/persistence/mongo/MongoClient'

container.register<MongoClient>('MClient', { useValue: client })
container.register<>
