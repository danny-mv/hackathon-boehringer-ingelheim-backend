import { Collection, ObjectId } from 'mongodb'
import { inject, injectable } from 'tsyringe'
import { MClient } from './MClient'

@injectable()
export abstract class MongoRepository<T> {
  constructor(@inject('MClient') private db: MClient) {}
  protected abstract collectionName(): string

  protected async collection(): Promise<Collection> {
    return this.db.getDatabase().collection(this.collectionName())
  }

  protected async persist(id: string, entity: T): Promise<void> {
    const collection = await this.collection()
    const document = { ...entity, _id: id, id: undefined }

    await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: document },
      { upsert: true }
    )
  }
}
