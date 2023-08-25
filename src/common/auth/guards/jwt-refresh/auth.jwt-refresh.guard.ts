import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import type { Request } from 'express';

@Injectable()
export class JWTRefreshGuard extends AuthGuard('jwt-refresh') {
    public getRequest(context: ExecutionContext) {
        if (context.getType<GqlContextType>() === 'graphql')
            return GqlExecutionContext.create(context).getContext().req;

        return context.switchToHttp().getRequest<Request>();
    }
}
