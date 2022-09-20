import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Organization extends BaseEntity {

    @PrimaryGeneratedColumn()
    id_organization: number;
    
    @Column()
    name: string;

    @Column({
        default: true
    })
    status: boolean;
}
