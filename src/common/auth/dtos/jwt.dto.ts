import { Field, ObjectType } from '@nestjs/graphql';
import { Property } from '@src/common/base/decorators/property.decorator';

@ObjectType()
export class JwtDTO {
    @Property()
    @Field()
    accessToken: string;

    @Property()
    @Field()
    refreshToken: string;
}
