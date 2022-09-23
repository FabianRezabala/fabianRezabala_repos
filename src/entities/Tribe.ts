import {BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import { Organization } from './Organization';
import { Repositorie } from './Repositorie';

@Entity()
export class Tribe extends BaseEntity {

    @PrimaryGeneratedColumn()
    id_tribe: number;
    
    @Column({length: 50})
    name: string;

    @Column({
        default: true
    })
    status: boolean;

    @ManyToOne(() => Organization, (organization) => organization.tribes)
    organization: Organization;

    @OneToMany(() => Repositorie, (repositorie) => repositorie.tribe)
    repositories: Repositorie[]; 

}