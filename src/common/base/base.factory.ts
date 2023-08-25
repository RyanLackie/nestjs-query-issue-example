// import { Injectable } from '@nestjs/common';
// import { TypeOrmQueryService } from '@ptc-org/nestjs-query-typeorm';
// import { DeepPartial } from 'typeorm';

// @Injectable()
// export abstract class BaseFactory<T> {
//     constructor(private readonly entityService: TypeOrmQueryService<T>) {}

//     public abstract generateDTO(
//         createDTO: DeepPartial<T>,
//     ): Promise<DeepPartial<T>>;

//     public async generateDTOs(
//         createDTOArray: DeepPartial<T[]> = [],
//     ): Promise<DeepPartial<T>[]> {
//         const entities = [];
//         for (const createDTO of createDTOArray) {
//             const entity = await this.generateDTO(createDTO);
//             entities.push(entity);
//         }
//         return entities;
//     }

//     public async createEntity(
//         entityData: DeepPartial<T> = {} as DeepPartial<T>,
//     ): Promise<T> {
//         const entity = await this.generateDTO(entityData);
//         return await this.entityService.createOne(entity);
//     }

//     public async createEntities(
//         entityDataArray: DeepPartial<T>[] = [],
//     ): Promise<T[]> {
//         const generateDTOs = entityDataArray.map((entityData) =>
//             this.generateDTO(entityData),
//         );
//         const entities = (await Promise.all(generateDTOs)) as DeepPartial<T>[];
//         return await this.entityService.createMany(entities);
//     }
// }
