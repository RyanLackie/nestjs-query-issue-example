import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExampleEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    someField: string;
}
