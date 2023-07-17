import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';

import { CreateExampleDTO } from './dtos/create-example.dto';
import { ExampleDTO } from './dtos/example.dto';
import { ExampleEntity } from './example.entity';
import { ExampleResolver } from './example.resolver';
import { ExampleSubscriber } from './example.subscriber';

@Module({
    imports: [
        NestjsQueryGraphQLModule.forFeature({
            imports: [NestjsQueryTypeOrmModule.forFeature([ExampleEntity])],
            dtos: [
                {
                    DTOClass: ExampleDTO,
                    CreateDTOClass: CreateExampleDTO,
                },
            ],
            // resolvers: [
            //     {
            //         DTOClass: ExampleDTO,
            //         CreateDTOClass: CreateExampleDTO,
            //         EntityClass: ExampleEntity,
            //     },
            // ],
        }),
    ],
    providers: [ExampleResolver, ExampleSubscriber],
})
export class ExampleModule {}
