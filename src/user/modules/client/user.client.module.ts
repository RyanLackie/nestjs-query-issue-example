import { Module, forwardRef } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { JwtAuthGuard } from '@src/common/auth/guards/jwt-auth/auth.jwt-auth.guard';
import { RoleGuard } from '@src/common/auth/guards/role/auth.role.guard';
import { EmailVerificationEntity } from '@src/email-verification/email-verification.entity';
import { EmailVerificationModule } from '@src/email-verification/email-verification.module';
import { EmailVerificationService } from '@src/email-verification/email-verification.service';

import { UserEntity, UserRole } from '../../user.entity';
import { UserService } from '../../user.service';
import { CreateUserDTO } from './dtos/user.client.create.dto';
import { UserDTO } from './dtos/user.client.dto';
import { UpdateUserDTO } from './dtos/user.client.update.dto';

@Module({
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [NestjsQueryTypeOrmModule.forFeature([UserEntity])],
            services: [UserService],
            resolvers: [
                {
                    DTOClass: UserDTO,
                    CreateDTOClass: CreateUserDTO,
                    UpdateDTOClass: UpdateUserDTO,
                    EntityClass: UserEntity,
                    ServiceClass: UserService,
                    guards: [JwtAuthGuard, RoleGuard([UserRole.USER])],
                    read: {
                        many: { disabled: true },
                    },
                    create: {
                        disabled: true,
                    },
                    update: {
                        many: {
                            disabled: true,
                        },
                    },
                    delete: {
                        disabled: true,
                    },
                },
            ],
        }),
        forwardRef(() => EmailVerificationModule),
        NestjsQueryTypeOrmModule.forFeature([EmailVerificationEntity]),
    ],
    providers: [UserService, EmailVerificationService],
    exports: [UserService],
})
export class UserClientModule {}
