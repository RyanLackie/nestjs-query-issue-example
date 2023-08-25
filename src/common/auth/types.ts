import { ExecutionContext } from '@nestjs/common';
import { UserEntity } from '@src/user/user.entity';

export type RequestWithUser = Request & { user: UserEntity };
export type ContextWithRequest = ExecutionContext & {
    req: RequestWithUser;
};

export interface JwtPayload {
    sub: string;
    email: string;
}

export interface Payload {
    id: string;
    email: string;
}
