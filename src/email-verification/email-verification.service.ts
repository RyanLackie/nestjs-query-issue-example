import { InjectRepository } from '@nestjs/typeorm';
import { QueryService } from '@ptc-org/nestjs-query-core';
import { TypeOrmQueryService } from '@ptc-org/nestjs-query-typeorm';
import { Repository } from 'typeorm';

import { EmailVerificationEntity } from './email-verification.entity';

@QueryService(EmailVerificationEntity)
export class EmailVerificationService extends TypeOrmQueryService<EmailVerificationEntity> {
    constructor(
        @InjectRepository(EmailVerificationEntity)
        public emailVerificationRepository: Repository<EmailVerificationEntity>,
    ) {
        super(emailVerificationRepository);
    }
}
