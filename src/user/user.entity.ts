import { BaseEntity } from '@src/common/base/base.entity';
import { EmailVerificationEntity } from '@src/email-verification/email-verification.entity';
import * as bcrypt from 'bcrypt';
import { IsEmail } from 'class-validator';
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany } from 'typeorm';

export enum UserRole {
    ADMIN = 'admin',
    USER = 'user',
}

@Entity()
export class UserEntity extends BaseEntity {
    @Column({ unique: true })
    @IsEmail()
    email!: string;

    @Column()
    password!: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER,
    })
    role!: UserRole;

    @OneToMany(
        () => EmailVerificationEntity,
        (emailVerification) => emailVerification.user,
        {
            cascade: ['insert', 'update', 'remove'],
        },
    )
    emailVerifications!: EmailVerificationEntity[];

    // Hooks
    @BeforeInsert()
    @BeforeUpdate()
    async updatePassword() {
        if (this.password === undefined) return;
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }
}
