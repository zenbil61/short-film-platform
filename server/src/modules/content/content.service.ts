import { Injectable } from '@nestjs/common';
import { ApiResponse } from 'src/common/apiResponse';
import ContentTypeRepository from 'src/db/repositories/contentTypeRepository';
import { ContentTypeDto } from './dtos/contentTypeDto';
import ContentRepository from 'src/db/repositories/contentRepository';
import { ContentDto } from './dtos/contentDto';
import { CreateContentDto } from './dtos/createContentDto';
import { IContent } from 'src/db/model/IContent';
import { UpdateContentDto } from './dtos/updateContentDto';
import ContentCategoryRepository from 'src/db/repositories/contentCategoryRepository';
import { IContentCategory } from 'src/db/model/IContentCategory';
import { UploadService } from '../upload/upload.service';
import { MAX_CONTENT_COUNT } from 'src/common/constant';
import { base64ToImageObject, createFileName } from 'src/common/helper';
import { ForbiddenException, LimitException, NotFoundException } from 'src/exceptions';

@Injectable()
export class ContentService {
  constructor(
    private readonly contentTypeRepository: ContentTypeRepository,
    private readonly contentRepository: ContentRepository,
    private readonly contentCategoryRepository: ContentCategoryRepository,
    private readonly uploadService: UploadService,
  ) { }

  async createContent(userId: number, request: CreateContentDto): Promise<ApiResponse<Boolean>> {
    const response = new ApiResponse<Boolean>();
    const count = await this.contentRepository.getUserContentCount(userId);

    if (count >= MAX_CONTENT_COUNT) {
      throw new LimitException(`En fazla ${MAX_CONTENT_COUNT} adet içerik yükleyebilirsiniz.`);
    }


    const smallImageFileName = createFileName(userId, 'small_image', 'jpg')
    const coverImageFileName = createFileName(userId, 'cover_image', 'jpg')

    await this.uploadService.uploadBase64('content', request.smallImage, smallImageFileName, 'image/jpeg');
    await this.uploadService.uploadBase64('content', request.coverImage, coverImageFileName, 'image/jpeg');

    const newContent: IContent = {
      ContentType: request.contentType,
      Name: request.name,
      Description: request.description,
      TargetAge: request.targetAge,
      CoverImage: coverImageFileName,
      SmallImage: smallImageFileName,
      IsPrivate: request.isPrivate,
      CreatedDate: new Date(),
      IsActive: true,
      UserId: userId,
      ReleaseYear: request.releaseYear
    }

    const result = await this.contentRepository.create(newContent);

    const newContentCategory: Array<IContentCategory> = request.categories.map(item => ({
      CategoryId: item,
      ContentId: result.ContentId
    }));

    await this.contentCategoryRepository.createArray(newContentCategory);
    return response.Success();
  };

  async updateContent(userId: number, request: UpdateContentDto): Promise<ApiResponse<Boolean>> {
    const response = new ApiResponse<Boolean>();
    const content = await this.contentRepository.findById(request.contentId);

    if (!content) {
      throw new NotFoundException('İçerik Bulunamadı');
    }
    if (userId !== content.UserId) {
      throw new ForbiddenException('Yetkisiz İşlem');
    }

    const newContent: IContent = {
      ContentType: request.contentType,
      Name: request.name,
      Description: request.description,
      TargetAge: request.targetAge,
      CoverImage: request.coverImage,
      SmallImage: request.smallImage,
      IsPrivate: request.isPrivate,
      CreatedDate: new Date(),
      IsActive: true,
      UserId: userId,
      ReleaseYear: request.releaseYear
    }

    await this.contentRepository.update(request.contentId, newContent);
    await this.contentCategoryRepository.deleteByContent(request.contentId);
    const newContentCategory: Array<IContentCategory> = request.categories.map(item => ({
      CategoryId: item,
      ContentId: request.contentId
    }))
    await this.contentCategoryRepository.createArray(newContentCategory);

    return response.Success();
  };

  async deleteContent(userId: number, contentId: number): Promise<ApiResponse<Boolean>> {
    const response = new ApiResponse<Boolean>();
    const content = await this.contentRepository.findById(contentId);
    if (userId !== content.UserId) {
      throw new ForbiddenException('Yetkisiz İşlem');
    }
    if (!content) {
      throw new NotFoundException('İçerik Bulunamadı');
    }


    await this.uploadService.delete(content.CoverImage);
    await this.uploadService.delete(content.SmallImage);

    await this.contentCategoryRepository.deleteByContent(contentId);
    await this.contentRepository.delete(contentId);
    return response.Success();
  };

  async getContentTypes(): Promise<ApiResponse<ContentTypeDto[]>> {
    const response = new ApiResponse<ContentTypeDto[]>();
    const types = await this.contentTypeRepository.getAll();
    response.data = types.map((item) => ({
      contentTypeId: item.ContentTypeId,
      contentType: item.ContentType
    }));

    return response.Success();
  };

  async getUserContents(userId: number): Promise<ApiResponse<ContentDto[]>> {
    const response = new ApiResponse<ContentDto[]>();
    const contents = await this.contentRepository.getUserContents(userId);
    response.data = contents.map((item) => ({
      contentId: item.ContentId,
      contentType: item.ContentType,
      releaseYear: item.ReleaseYear,
      description: item.Description,
      name: item.Name,
      isPrivate: item.IsPrivate,
      targetAge: item.TargetAge,
      smallImage: item.SmallImage,
      coverImage: item.CoverImage
    }));
    return response.Success();
  };
}