import { ID, ObjectType } from '@nestjs/graphql';
import {
    FilterableField,
    FilterableRelation,
} from '@ptc-org/nestjs-query-graphql';
import { Property } from '@src/common/base/decorators/property.decorator';
import { UserDTO } from '@src/user/modules/client/dtos/user.client.dto';

@ObjectType('EmailVerification')
@FilterableRelation('user', () => UserDTO, {
    remove: {
        enabled: false,
    },
})
export class EmailVerificationDTO {
    @Property()
    @FilterableField(() => ID, { nullable: true })
    declare id: string;

    @Property()
    @FilterableField({ nullable: true })
    declare email: string;

    @Property()
    @FilterableField({ nullable: true })
    declare code: string;

    @Property()
    @FilterableField(() => ID, { nullable: true })
    declare userId: string;
}
