import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ExampleModule } from './example/example.module';

export const graphqlPath = '/graphql';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: 'postgres',
            database: 'postgres',
            username: 'postgres',
            password: 'postgres',
            autoLoadEntities: true,
            synchronize: true,
            logging: false,
            dropSchema: false,
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            path: graphqlPath,
            include: [ExampleModule],
            autoSchemaFile: true,
            driver: ApolloDriver,
        }),
        ExampleModule,
    ],
})
export class AppModule {}
