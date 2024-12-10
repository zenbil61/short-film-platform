import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { IUserAuthorized } from 'src/common/IUserAuthorized';

export const User = createParamDecorator(
    (_: unknown, ctx: ExecutionContext): IUserAuthorized => {
        const request = ctx.switchToHttp().getRequest();
        return request.user as IUserAuthorized; // `req.user`'ı `IUser` tipine cast ediyoruz
    },
);
