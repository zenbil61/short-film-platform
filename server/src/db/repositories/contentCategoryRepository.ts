import { Injectable } from '@nestjs/common';
import { BaseRepository } from './baseRepository';
import db from '../db';
import { IContentCategory } from '../model/IContentCategory';

@Injectable()
class ContentCategoryRepository extends BaseRepository<IContentCategory> {
    constructor() {
        super('ContentCategory', 'ContentCategoryId', db);
    }
    async deleteByContent(contentId: number): Promise<Boolean[]> {
        return await this.db(this.tableName).where('ContentId', contentId).del();
    }

}

export default ContentCategoryRepository;
