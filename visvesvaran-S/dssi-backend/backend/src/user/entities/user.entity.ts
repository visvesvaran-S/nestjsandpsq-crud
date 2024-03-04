import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"user"})
export class User {
  
    @PrimaryGeneratedColumn()
    id:number;

    @Column({type:"text",nullable:true})
    name:string

    @Column({type:"text",nullable:true})
    email:string

    @Column({type:"text",nullable:true})
    password:string

    @Column({type:"text",nullable:true})
     confirmpassword:string

}
