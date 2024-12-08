import { Body, Controller, Delete, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) { }

  @Post(':folder')
  @UseInterceptors(FileInterceptor('file'))
  async uploadContent(@UploadedFile() file, @Param('folder') folder: string) {
    if (!file) {
      throw new Error('Dosya bulunamadı.');
    }
    return this.uploadService.upload(folder, file);
  }
  @Delete('')
  async deleteContent(@Body() request) {
    return this.uploadService.delete(request.path);
  }
}
