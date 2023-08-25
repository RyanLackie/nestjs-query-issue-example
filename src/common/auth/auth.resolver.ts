import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDTO } from '@src/user/modules/client/dtos/user.client.create.dto';
import { UserDTO } from '@src/user/modules/client/dtos/user.client.dto';
import { UserService } from '@src/user/user.service';

import { AuthService } from './auth.service';
import { CurrentUser } from './decorators/decorators.current-user';
import { JwtDTO } from './dtos/jwt.dto';
import { LoginDTO } from './dtos/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth/auth.jwt-auth.guard';
import { JWTRefreshGuard } from './guards/jwt-refresh/auth.jwt-refresh.guard';

@Resolver()
export class AuthResolver {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
    ) {}

    @Mutation(() => JwtDTO)
    async signUp(@Args('input') input: CreateUserDTO) {
        return {
            accessToken: '',
            refreshRoken: '',
        };
    }

    @Query(() => JwtDTO)
    async login(@Args('input') input: LoginDTO) {
        return {
            accessToken: '',
            refreshRoken: '',
        };
    }

    @UseGuards(JwtAuthGuard)
    @Query(() => UserDTO)
    async me(@CurrentUser() currentUser) {
        return {
            id: currentUser.id,
            email: currentUser.email,
        };
    }

    @UseGuards(JWTRefreshGuard)
    @Mutation(() => JwtDTO)
    async refreshLogin(@CurrentUser() currentUser) {
        const jwt = this.authService.jwtSign({
            id: currentUser.id,
            email: currentUser.email,
        });
        return jwt;
    }
}
