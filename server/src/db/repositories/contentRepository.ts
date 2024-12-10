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
    async getUserContents(UserId: number): Promise<IContent[]> {
        return await this.db(this.tableName).where('UserId', UserId).select('*');
    }
    async getUserContentCount(UserId: number): Promise<number> {
        const [{ count }] = await this.db(this.tableName).where('UserId', UserId).count();
        return Number(count);
    }
}

export default ContentRepository;
