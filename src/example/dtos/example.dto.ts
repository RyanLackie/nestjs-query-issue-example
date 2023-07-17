import { Field, ID, ObjectType } from '@nestjs/graphql';
import { IDField } from '@ptc-org/nestjs-query-graphql';

@ObjectType('Example')
export class ExampleDTO {
    @IDField(() => ID)
    id: string;

    @Field({ nullable: true })
    someField: string;
}
