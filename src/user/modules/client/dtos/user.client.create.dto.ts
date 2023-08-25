import { Field, InputType } from '@nestjs/graphql';
import { Property } from '@src/common/base/decorators/property.decorator';
import { UserEntity } from '@src/user/user.entity';

@InputType()
export class CreateUserDTO extends UserEntity {
    @Property()
    @Field()
    declare email: string;

    @Property()
    @Field()
    declare password: string;
}
