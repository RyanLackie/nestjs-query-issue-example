import { Resolver } from '@nestjs/graphql';
import { InjectQueryService, QueryService } from '@ptc-org/nestjs-query-core';
import { CRUDResolver } from '@ptc-org/nestjs-query-graphql';

import { CreateExampleDTO } from './dtos/create-example.dto';
import { ExampleDTO } from './dtos/example.dto';
import { ExampleEntity } from './example.entity';

@Resolver(() => ExampleDTO)
export class ExampleResolver extends CRUDResolver(ExampleDTO, {
    CreateDTOClass: CreateExampleDTO,
}) {
    constructor(
        @InjectQueryService(ExampleEntity)
        readonly service: QueryService<ExampleEntity>,
    ) {
        super(service);
    }
}
