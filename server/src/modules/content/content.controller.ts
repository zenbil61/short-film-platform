import { Controller, Get, Post, Put, Delete, Request, UseGuards, Body } from '@nestjs/common';
import { ContentService } from './content.service';
import { ApiResponse } from 'src/common/apiResponse';
import { ContentTypeDto } from './dtos/contentTypeDto';
import { ContentDto } from './dtos/contentDto';
import { CreateContentDto } from './dtos/createContentDto';
import { AuthGuard } from 'src/common/AuthGuard';
import { UpdateContentDto } from './dtos/updateContentDto';
import { plainToInstance } from 'class-transformer';


@UseGuards(AuthGuard)
@Controller('content')
export class ContentController {
  constructor(
    private readonly service: ContentService,
  ) { }

  @Post('')
  async createContent(@Request() req): Promise<ApiResponse<Boolean>> {
    const userId: Number = req?.user?.userId;
    const request: CreateContentDto = req.body;
    return await this.service.createContent(userId, request);
  }
  // @Put('')
  // async updateContent(@Request() req): Promise<ApiResponse<Boolean>> {
  //   const userId: Number = req?.user?.userId;
  //   const request: UpdateContentDto = plainToInstance(UpdateContentDto, req.body);
  //   return await this.service.updateContent(userId, request);
  // }
  @Put('')
  async updateContent(@Body() req: UpdateContentDto): Promise<ApiResponse<Boolean>> {
    // const userId: Number = req?.user?.userId;
    // const request: UpdateContentDto = plainToInstance(UpdateContentDto, req.body);
    return await this.service.updateContent(10, req);
  }
  @Delete('')
  async deleteContent(@Request() req): Promise<ApiResponse<Boolean>> {
    const userId: Number = req?.user?.userId;
    const contentId: Number = req.body.contentId;
    return await this.service.deleteContent(userId, contentId);
  }

  @Get('types')
  async getContentTypes(): Promise<ApiResponse<ContentTypeDto[]>> {
    return await this.service.getContentTypes();
  }

  @Get('list')
  async getUserContents(@Request() req): Promise<ApiResponse<ContentDto[]>> {
    const userId: Number = req?.user?.userId;
    return await this.service.getUserContents(userId);
  }

}
