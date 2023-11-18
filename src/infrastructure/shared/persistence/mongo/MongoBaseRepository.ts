import { Collection, MongoClient, ObjectId } from 'mongodb'

export abstract class MongoBaseRepository<T> {
  constructor(private readonly client: MongoClient) {}
  protected abstract collectionName(): string

  protected async collection(): Promise<Collection> {
    return this.client.db().collection(this.collectionName())
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
