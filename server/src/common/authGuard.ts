import {
    CanActivate,
    ExecutionContext,
    Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { JWT_SECRET } from './constant';
import { Request } from 'express';
import { LimitException } from 'src/exceptions/LimitException';
import { UnauthorizeException } from 'src/exceptions';
import { IUserAuthorized } from './IUserAuthorized';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private jwtService: JwtService, private reflector: Reflector) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        // @SetMetadata('isPublic', true) olarak verilmiş metadataları bu guarddan hariç tutuyor
        const isPublic = this.reflector.get<boolean>('isPublic', context.getHandler());
        if (isPublic) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        request['user'] = { userId: 11 } as IUserAuthorized;

        return true; // TODO sürekli test ortamında token almamak için koydum

        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new UnauthorizeException('Kimlik Doğrulamanız Yapılamadı');
        }
        try {
            // tokeni doğruluyor ve içinden bilgileri çekiyor
            const payload = await this.jwtService.verifyAsync(token, { secret: JWT_SECRET });
            request['user'] = payload;
        } catch {
            throw new UnauthorizeException('Kimlik Doğrulamanız Yapılamadı');
        }
        return true;
    }

    // headerdan token bilgisini çekiyorum
    private extractTokenFromHeader(request: Request): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
