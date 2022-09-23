import {BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { Tribe } from './Tribe';

@Entity()
export class Repositorie extends BaseEntity {

    @PrimaryGeneratedColumn()
    id_repository: number;
    
    @Column({length: 50})
    name: string;

    @Column({length: 1})
    state: string;

    @Column({length: 1})
    status: string;

    @Column("timestamp")
    create_time: Date;

    @ManyToOne(() => Tribe, (tribe) => tribe.repositories)
    tribe: Tribe;

}