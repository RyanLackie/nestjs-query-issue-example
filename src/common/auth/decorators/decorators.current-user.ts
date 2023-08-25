import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { GqlContextType, GqlExecutionContext } from '@nestjs/graphql';
import { UserEntity } from '@src/user/user.entity';

export const CurrentUser = createParamDecorator(
    (data: unknown, context: ExecutionContext): UserEntity => {
        if (context.getType<GqlContextType>() === 'graphql')
            return GqlExecutionContext.create(context).getContext().req.user;
    },
);
