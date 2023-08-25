import { InjectRepository } from '@nestjs/typeorm';
import { QueryService } from '@ptc-org/nestjs-query-core';
import { TypeOrmQueryService } from '@ptc-org/nestjs-query-typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './user.entity';

@QueryService(UserEntity)
export class UserService extends TypeOrmQueryService<UserEntity> {
    constructor(
        @InjectRepository(UserEntity)
        public userRepository: Repository<UserEntity>,
    ) {
        super(userRepository);
    }
}
