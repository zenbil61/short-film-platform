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

@Injectable()
export class ContentService {
  constructor(
    private readonly contentTypeRepository: ContentTypeRepository,
    private readonly contentRepository: ContentRepository,
    private readonly contentCategoryRepository: ContentCategoryRepository,
  ) { }

  async createContent(userId: Number, request: CreateContentDto): Promise<ApiResponse<Boolean>> {
    const response = new ApiResponse<Boolean>();

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

    const result = await this.contentRepository.create(newContent);
    const newContentCategory: Array<IContentCategory> = request.categories.map(item => ({
      CategoryId: item,
      ContentId: result.ContentId
    }))
    const resultCategory = await this.contentCategoryRepository.createArray(newContentCategory);
    return response.Success();
  };

  async updateContent(userId: Number, request: UpdateContentDto): Promise<ApiResponse<Boolean>> {
    const response = new ApiResponse<Boolean>();

    const content: IContent = {
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



    await this.contentRepository.update(request.contentId, content);
    await this.contentCategoryRepository.deleteByContent(request.contentId);
    const newContentCategory: Array<IContentCategory> = request.categories.map(item => ({
      CategoryId: item,
      ContentId: request.contentId
    }))
    await this.contentCategoryRepository.createArray(newContentCategory);

    return response.Success();
  };

  async deleteContent(userId: Number, contentId: Number): Promise<ApiResponse<Boolean>> {
    const response = new ApiResponse<Boolean>();
    await this.contentRepository.delete(contentId);
    await this.contentCategoryRepository.deleteByContent(contentId);
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

  async getUserContents(userId: Number): Promise<ApiResponse<ContentDto[]>> {
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
