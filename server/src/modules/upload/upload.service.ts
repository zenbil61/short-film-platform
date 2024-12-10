import { Injectable, HttpStatus } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { ConflictException, CustomException } from 'src/exceptions';

@Injectable()
export class UploadService {
  private readonly s3: AWS.S3;

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
        throw new ConflictException(
          'Dosya zaten mevcut. Üzerine yazma işlemi yapılmadı.',
        );
      }
      const result = await this.s3.upload(params).promise();
      return result; // Yüklenen dosyanın URL'sini içerir
    } catch (error) {
      throw new CustomException('Dosya yüklenemedi.');
    }
  }

  async uploadBase64(folder: string, base64Data: string, filename: string, mimetype: string): Promise<any> {
    try {
      // Base64 verisinden "data:image/png;base64," kısmını çıkar
      const base64Content = base64Data.replace(/^data:\w+\/\w+;base64,/, '');

      // Base64 string'i Buffer'a dönüştür
      const buffer = Buffer.from(base64Content, 'base64');

      const params = {
        Bucket: 'short-film-content',
        Key: `${folder}/${filename}`, // Dosya adı
        Body: buffer, // Dosya içeriği
        ContentType: mimetype, // İçerik türü
      };

      // Dosyanın var olup olmadığını kontrol et
      const isFileExists = await this.isExistFile(params.Key, params.Bucket);
      if (isFileExists) {
        throw new ConflictException(
          'Dosya zaten mevcut. Üzerine yazma işlemi yapılmadı.',
        );
      }

      // Dosyayı r2'ye yükle
      const result = await this.s3.upload(params).promise();
      return result; // Yüklenen dosyanın URL'sini içerir
    } catch (error) {
      throw new CustomException('Base64 dosyası yüklenemedi.');
    }
  }


  async delete(key: string): Promise<any> {
    try {
      const params = {
        Bucket: 'short-film-content',
        Key: key, // Dosya adı
      };

      const result = await this.s3.deleteObject(params).promise();
      return result; // Yüklenen dosyanın URL'sini içerir
    } catch (error) {
      throw new CustomException('Dosya yüklenemedi.');
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
