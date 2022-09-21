import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Metrics extends BaseEntity {

    @PrimaryGeneratedColumn()
    id_repository: number;
    
    @Column("double")
    coverage: number;

    @Column()
    bugs: number;

    @Column()
    vulnerabilities: number;

    @Column()
    hostpot: number

    @Column()
    code_smells: number

}