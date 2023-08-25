import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
@ObjectType()
export class LoginDTO {
    @Field()
    email!: string;

    @Field()
    password!: string;
}
