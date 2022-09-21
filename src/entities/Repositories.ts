import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Repositories extends BaseEntity {

    @PrimaryGeneratedColumn()
    id_repository: number;
    
    @Column({length: 50})
    name: string;

    @Column({length: 1})
    state: string;

    @Column({length: 1})
    status: string

    @Column("timestamp")
    create_time: Date

}