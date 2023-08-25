import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmailVerificationModule } from './email-verification/email-verification.module';
import { ExampleModule } from './example/example.module';
import { UserClientModule } from './user/modules/client/user.client.module';

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
            include: [ExampleModule, UserClientModule, EmailVerificationModule],
            autoSchemaFile: true,
            driver: ApolloDriver,
        }),
        ExampleModule,
        UserClientModule,
        EmailVerificationModule,
    ],
})
export class AppModule {}
