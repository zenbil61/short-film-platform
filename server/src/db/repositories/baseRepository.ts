import db from '../db';

import { Knex } from 'knex';

export class BaseRepository<T> {
    protected tableName: string;
    protected primaryIdKey: string;
    protected db: Knex;

    constructor(tableName: string, primaryIdKey: string, db: Knex) {
        this.tableName = tableName;
        this.primaryIdKey = primaryIdKey;
        this.db = db;
    }

    async findAll(): Promise<T[]> {
        return this.db(this.tableName).select('*');
    }

    async findById(id: Number): Promise<T | undefined> {
        return this.db(this.tableName).where(this.primaryIdKey, id).first();
    }

    async create(data: Partial<T>): Promise<T> {
        const [createdRecord] = await this.db(this.tableName).insert(data).returning('*');
        return createdRecord;
    }

    async update(id: Number, data: Partial<T>): Promise<T> {
        const [updatedRecord] = await this.db(this.tableName).where(this.primaryIdKey, id).update(data).returning('*');
        return updatedRecord;
    }

    async delete(id: Number): Promise<void> {
        await this.db(this.tableName).where(this.primaryIdKey, id).del();
    }
}
