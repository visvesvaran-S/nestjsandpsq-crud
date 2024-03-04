import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:'form'})
export class Visva {

   @PrimaryGeneratedColumn()
   id:number;

   @Column({type:"text", nullable:true})
   studentname:string;

   @Column({type:"text", nullable:true})
   dob:string;

   @Column({type:"text",nullable:true})
   age:string;

   @Column({type:"text",nullable:true})
   createrusername:string; 

   @Column({type:"text",nullable:true})
   updateusername:string; 

   @Column({type:"text", nullable:true})
   subjectone:string;

   @Column({type:"text", nullable:true})
   markone:string;

   @Column({type:"text", nullable:true})
   subjecttwo:string;
   
   @Column({type:"text", nullable:true})
   marktwo:string;

   @CreateDateColumn({type:'timestamptz',default:()=>'CURRENT_TIMESTAMP'})
   createat:Date;

  @CreateDateColumn({type:'timestamptz',default:()=>'CURRENT_TIMESTAMP'})
  updatedat:Date;


}
