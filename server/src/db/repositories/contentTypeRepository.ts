import { Injectable } from '@nestjs/common';
import { BaseRepository } from './baseRepository';
import db from '../db';
import { IContentType } from '../model/IContentType';

@Injectable()
class ContentTypeRepository extends BaseRepository<IContentType> {
    constructor() {
        super('ContentType', 'ContentTypeId', db);
    }

    async getAll(): Promise<IContentType[]> {
        return this.db(this.tableName).delete('*');
    }

}

export default ContentTypeRepository;
