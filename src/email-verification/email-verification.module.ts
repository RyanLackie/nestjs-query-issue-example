import { Module, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { AuthService } from '@src/common/auth/auth.service';
import { UserClientModule } from '@src/user/modules/client/user.client.module';

import { EmailVerificationDTO } from './dtos/email-verification.dto';
import { UpdateEmailVerificationDTO } from './dtos/email-verification.update.dto';
import { EmailVerificationEntity } from './email-verification.entity';
import { EmailVerificationService } from './email-verification.service';

@Module({
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [
                NestjsQueryTypeOrmModule.forFeature([EmailVerificationEntity]),
            ],
            services: [EmailVerificationService],
            resolvers: [
                {
                    DTOClass: EmailVerificationDTO,
                    UpdateDTOClass: UpdateEmailVerificationDTO,
                    EntityClass: EmailVerificationEntity,
                    ServiceClass: EmailVerificationService,
                    create: { disabled: true },
                    read: { disabled: true },
                    update: { disabled: true },
                    delete: { disabled: true },
                },
            ],
        }),
        forwardRef(() => UserClientModule),
    ],
    providers: [EmailVerificationService, AuthService, JwtService],
    exports: [EmailVerificationService],
})
export class EmailVerificationModule {}
