import {
    CanActivate,
    ExecutionContext,
    Inject,
    forwardRef,
    mixin,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserRole } from '@src/user/user.entity';
import { UserService } from '@src/user/user.service';

export const RoleGuard = (allowedRoles: UserRole[]) => {
    class RoleGuardMixin implements CanActivate {
        constructor(
            @Inject(forwardRef(() => UserService))
            readonly userService: UserService,
        ) {}

        async canActivate(context: ExecutionContext): Promise<boolean> {
            const user =
                GqlExecutionContext.create(context).getContext().req.user;

            // Update request user with db info if needed
            if (user.role === undefined) {
                const userFromDb = await this.userService.repo.findOneByOrFail({
                    id: user.id,
                });
                user.role = userFromDb.role;
            }

            return allowedRoles.includes(user.role);
        }
    }

    return mixin(RoleGuardMixin);
};
