import { Controller, Get, Post, Put, Delete, Request, UseGuards, Body } from '@nestjs/common';
import { ContentService } from './content.service';
import { ApiResponse } from 'src/common/apiResponse';
import { ContentTypeDto } from './dtos/contentTypeDto';
import { ContentDto } from './dtos/contentDto';
import { CreateContentDto } from './dtos/createContentDto';
import { AuthGuard } from 'src/common/AuthGuard';
import { UpdateContentDto } from './dtos/updateContentDto';
import { ValidationException } from 'src/exceptions';
import { User } from 'src/decorators/user';
import { IUserAuthorized } from 'src/common/IUserAuthorized';


@UseGuards(AuthGuard)
@Controller('content')
export class ContentController {
  constructor(
    private readonly service: ContentService,
  ) { }

  @Post('')
  async createContent(
    @Body() request: CreateContentDto,
    @User() user: IUserAuthorized
  ): Promise<ApiResponse<Boolean>> {
    return await this.service.createContent(user.userId, request);
  }

  @Put('')
  async updateContent(
    @Body() request: UpdateContentDto,
    @User() user: IUserAuthorized
  ): Promise<ApiResponse<Boolean>> {
    return await this.service.updateContent(user.userId, request);
  }

  @Delete('')
  async deleteContent(
    @Body() request,
    @User() user: IUserAuthorized
  ): Promise<ApiResponse<Boolean>> {
    const contentId: number = request.contentId;
    return await this.service.deleteContent(user.userId, contentId);
  }

  @Get('types')
  async getContentTypes(): Promise<ApiResponse<ContentTypeDto[]>> {
    return await this.service.getContentTypes();
  }

  @Get('list')
  async getUserContents(@User() user: IUserAuthorized): Promise<ApiResponse<ContentDto[]>> {
    return await this.service.getUserContents(user.userId);
  }

  @Get('test')
  async testAuthorized(): Promise<number> {
    throw new ValidationException('', 'cukkafa');
    // const abc = await this.service.getUserContentCount(10);
    return 10;
  }

}
