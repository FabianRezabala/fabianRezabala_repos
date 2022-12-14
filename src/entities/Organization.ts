import {BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Tribe } from './Tribe';

@Entity()
export class Organization extends BaseEntity {

    @PrimaryGeneratedColumn()
    id_organization: number;
    
    @Column({length: 50})
    name: string;

    @Column()
    status: number;

    @OneToMany(()=> Tribe, (tribe) => tribe.organization)
    tribes: Tribe[]; 
}
