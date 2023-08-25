import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { Filter } from '@ptc-org/nestjs-query-core';
import { CustomAuthorizer } from '@ptc-org/nestjs-query-graphql';
import { UserRole } from '@src/user/user.entity';
import { UserService } from '@src/user/user.service';

import { ContextWithRequest } from '../types';

@Injectable()
export class IsAdminAuthorizer implements CustomAuthorizer<any> {
    constructor(
        @Inject(forwardRef(() => UserService))
        private readonly userService: UserService,
    ) {}

    async authorize(context: ContextWithRequest): Promise<Filter<any>> {
        const user = context.req.user;

        // Update request user with db info if needed
        if (user.role === undefined) {
            const userFromDb = await this.userService.repo.findOneByOrFail({
                id: user.id,
            });
            user.role = userFromDb.role;
        }

        if (user.role === UserRole.ADMIN) {
            return Promise.resolve({});
        }

        // Fail
        return Promise.resolve({ id: { eq: null } });
    }
}
