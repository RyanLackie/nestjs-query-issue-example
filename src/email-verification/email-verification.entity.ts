import { BaseEntity } from '@src/common/base/base.entity';
import { UserEntity } from '@src/user/user.entity';
import { IsEmail } from 'class-validator';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity()
export class EmailVerificationEntity extends BaseEntity {
    @Column()
    @IsEmail()
    email!: string;

    @Column({ length: 10 })
    code!: string;

    @Column({ default: false })
    isVerified: boolean;

    @ManyToOne(() => UserEntity, (user) => user.emailVerifications, {
        onDelete: 'CASCADE',
    })
    user: UserEntity;

    @Column()
    userId: string;
}
