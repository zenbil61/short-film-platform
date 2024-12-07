import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
  constructor(private readonly service: ContentService) { }

  @Get()
  getContent(): string {
    return "content detay"
  }
  @Put('')
  updateContent(): string {
    return "content update"
  }
  @Post('')
  createContent(): string {
    return "content oluştur"
  }
  @Delete('')
  deleteContent(): string {
    return "content sil"
  }
  @Get('list')
  getContentList(): string {
    return "content listesi"
  }
}
