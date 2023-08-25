import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { EmailVerificationModule } from '@src/email-verification/email-verification.module';
import { UserClientModule } from '@src/user/modules/client/user.client.module';
import { UserEntity } from '@src/user/user.entity';
import { UserService } from '@src/user/user.service';
import * as dotenv from 'dotenv';

import { AuthService } from './auth.service';
import { AccessTokenStrategy } from './guards/jwt-auth/auth.jwt-access-token.strategy';
import { RefreshTokenStrategy } from './guards/jwt-refresh/auth.jwt-refresh-token.strategy';

dotenv.config();

@Module({
    imports: [
        PassportModule.register({
            defaultStrategy: 'jwt',
            property: 'user',
            session: false,
        }),
        JwtModule.register({
            secret: process.env.SECRET_KEY,
            signOptions: {
                expiresIn: process.env.JWT_EXPIRATION,
            },
        }),
        NestjsQueryTypeOrmModule.forFeature([UserEntity]),
        forwardRef(() => UserClientModule),
        forwardRef(() => EmailVerificationModule),
    ],
    providers: [
        AuthService,
        AccessTokenStrategy,
        RefreshTokenStrategy,
        UserService,
    ],
    exports: [PassportModule, JwtModule, AuthService],
})
export class AuthModule {}
