import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from '@src/common/auth/auth.service';
import { JwtDTO } from '@src/common/auth/dtos/jwt.dto';

import { EmailVerificationDTO } from './dtos/email-verification.dto';
import { UpdateEmailVerificationDTO } from './dtos/email-verification.update.dto';
import { EmailVerificationService } from './email-verification.service';

@Resolver(() => EmailVerificationDTO)
export class EmailVerificationResolver {
    constructor(
        readonly emailVerificationService: EmailVerificationService,
        private readonly authService: AuthService,
    ) {}

    @Mutation(() => JwtDTO)
    async verifyEmail(@Args('input') input: UpdateEmailVerificationDTO) {
        return {
            accessToken: '',
            refreshRoken: '',
        };
    }
}
