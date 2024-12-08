import { Injectable } from '@nestjs/common';
import { BaseRepository } from './baseRepository';
import db from '../db';
import { IContent } from '../model/IContent';
import { ContentDto } from 'src/modules/content/dtos/contentDto';

@Injectable()
class ContentRepository extends BaseRepository<IContent> {
    constructor () {
        super('Content', 'ContentId', db);
    }
    async getUserContents(UserId: Number): Promise<IContent[]> {
        return await this.db(this.tableName).where('UserId', UserId).select('*');
    }
}

export default ContentRepository;
