import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { JwtDTO } from './dtos/jwt.dto';
import { JwtPayload, Payload } from './types';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    public validateRefreshToken(data: Payload, refreshToken: string): boolean {
        const isValid = this.jwtService.verify(refreshToken, {
            secret: process.env.JWT_REFRESH_SECRET,
        });
        if (!isValid) return false;
        const payload = <{ sub: string }>this.jwtService.decode(refreshToken);
        return payload.sub === data.id;
    }

    public jwtSign(data: Payload): JwtDTO {
        const payload: JwtPayload = {
            sub: data.id,
            email: data.email,
        };
        return {
            accessToken: this.jwtService.sign(payload),
            refreshToken: this.getRefreshToken(payload.sub),
        };
    }

    private getRefreshToken(sub: string): string {
        return this.jwtService.sign(
            { sub },
            {
                secret: process.env.JWT_REFRESH_SECRET,
                expiresIn: process.env.JWT_REFRESH_EXPIRATION,
            },
        );
    }
}
