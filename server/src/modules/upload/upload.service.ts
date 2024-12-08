import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class UploadService {
  private readonly s3: AWS.S3;
  // private readonly bucketName: String = 'short-film-content';

  constructor() {
    this.s3 = new AWS.S3({
      endpoint: 'https://e1230e7b90cfb87e04bb9d9ebf7ec72d.r2.cloudflarestorage.com', // R2 endpoint
      accessKeyId: '471be71c0e0395155e934896fca5e138',
      secretAccessKey: '73fc26559cacefb38f7b034137e5f29a9133b017fd7526c3dddd910b2bafb1d3',
      region: 'auto', // R2 için region gerekli değil
      s3ForcePathStyle: true, // Path-style URL'leri zorunlu kılar
    });
  }
  async upload(folder, file): Promise<any> {
    try {
      const params = {
        Bucket: 'short-film-content',
        Key: `${folder}/${file.originalname}`, // Dosya adı
        Body: file.buffer, // Dosya içeriği
        ContentType: file.mimetype, // İçerik türü
      };
      const isfileExists = await this.isExistFile(params.Key, params.Bucket);
      if (isfileExists) {
        throw new HttpException(
          'Dosya zaten mevcut. Üzerine yazma işlemi yapılmadı.',
          HttpStatus.CONFLICT,
        );
      }
      const result = await this.s3.upload(params).promise();
      return result; // Yüklenen dosyanın URL'sini içerir
    } catch (error) {
      console.error('R2 Upload Error:', error);
      throw new HttpException('Dosya yüklenemedi.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async delete(path: string): Promise<any> {
    try {
      console.log('path', path)
      const params = {
        Bucket: 'short-film-content',
        Key: path, // Dosya adı
      };

      const result = await this.s3.deleteObject(params).promise();
      console.log('result', result)
      return result; // Yüklenen dosyanın URL'sini içerir
    } catch (error) {
      console.error('R2 Upload Error:', error);
      throw new HttpException('Dosya yüklenemedi.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }


  async isExistFile(key: string, bucketName: string): Promise<boolean> {
    try {
      await this.s3.headObject({ Bucket: bucketName, Key: key }).promise();
      return true; // Dosya mevcut
    } catch (error) {
      if (error.code === 'NotFound') {
        return false; // Dosya yok
      }
      throw error; // Başka bir hata varsa iletilir
    }
  }
}
