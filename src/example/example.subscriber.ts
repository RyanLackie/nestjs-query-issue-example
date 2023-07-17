import {
    DataSource,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
} from 'typeorm';

import { ExampleEntity } from './example.entity';

@EventSubscriber()
export class ExampleSubscriber<ExampleEntity>
    implements EntitySubscriberInterface<ExampleEntity>
{
    constructor(dataSource: DataSource) {
        dataSource.subscribers.push(this);
    }

    listenTo() {
        return ExampleEntity;
    }

    async afterInsert(event: InsertEvent<ExampleEntity>) {
        console.log('event.entity: ', event.entity);
    }
}
