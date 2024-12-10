import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import ContentTypeRepository from 'src/db/repositories/contentTypeRepository';
import ContentRepository from 'src/db/repositories/contentRepository';
import ContentCategoryRepository from 'src/db/repositories/contentCategoryRepository';
import { UploadService } from '../upload/upload.service';

@Module({
  imports: [],
  controllers: [ContentController],
  providers: [
    ContentService,
    ContentTypeRepository,
    ContentRepository,
    ContentCategoryRepository,
    UploadService
  ],
})
export class ContentModule { }
