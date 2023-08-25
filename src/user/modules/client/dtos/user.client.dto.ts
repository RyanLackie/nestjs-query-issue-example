import { ID, ObjectType } from '@nestjs/graphql';
import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql';
import { Property } from '@src/common/base/decorators/property.decorator';
import { UserEntity } from '@src/user/user.entity';

@ObjectType('User')
export class UserDTO extends UserEntity {
    @Property()
    @IDField(() => ID)
    declare id: string;

    @Property()
    @FilterableField()
    declare email: string;
}
