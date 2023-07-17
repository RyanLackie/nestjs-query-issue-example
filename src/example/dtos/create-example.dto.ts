import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateExampleDTO {
    @Field()
    someField: string;

    @Field()
    someExtraField: string;
}
