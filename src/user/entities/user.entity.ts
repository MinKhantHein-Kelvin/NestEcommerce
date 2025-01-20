import { Role } from "src/utility/commom/userrole.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;

    @Column()
    email : string;

    @Column()
    password : string;

    @Column({type : 'enum', enum:Role, array : true, default : [Role.USER]})
    role : Role[];
    
}
