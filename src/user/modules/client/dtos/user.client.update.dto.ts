import { Field, InputType } from '@nestjs/graphql';
import { Property } from '@src/common/base/decorators/property.decorator';
import { UserEntity } from '@src/user/user.entity';

@InputType()
export class UpdateUserDTO extends UserEntity {
    @Property()
    @Field({ nullable: true })
    declare email: string;

    @Property()
    @Field({ nullable: true })
    declare password: string;
}
