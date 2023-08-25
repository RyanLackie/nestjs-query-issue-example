import { Field, ID, InputType } from '@nestjs/graphql';
import { Property } from '@src/common/base/decorators/property.decorator';

@InputType()
export class UpdateEmailVerificationDTO {
    @Property()
    @Field(() => ID)
    declare id: string;

    @Property()
    @Field()
    declare code: string;
}
