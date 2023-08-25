import { Field, ObjectType } from '@nestjs/graphql';
import { Property } from '@src/common/base/decorators/property.decorator';
import { UserDTO } from '@src/user/modules/client/dtos/user.client.dto';

import { JwtDTO } from './jwt.dto';

@ObjectType()
export class AuthDTO {
    @Property()
    @Field()
    user: UserDTO;

    @Property()
    @Field()
    jwt: JwtDTO;
}
