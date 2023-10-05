import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CategoryEnum, StatusEnum } from "../model/feedback.model";

// ei entity ta pg admin database e add hobe .. 

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  id:number;

  @Column({default : ""}) // {default : ""} ei ta must dite hobe .. 
  // na dile "violates not-null constraint "  ei error dibe 
  title :string;


  @Column({type: 'enum', enum : StatusEnum, default : StatusEnum.Suggestion})
  status : string;

  @Column({type: 'enum', enum : CategoryEnum, default : CategoryEnum.Enhancement})
  category : string;

  @Column('text', {default : ""}) // type 
  description :string;


  @Column({default: 0})
  upvote :number;
  
  @Column({default: 0})
  comments :number;


  

}

// {
//   "id" : 12,
//   "title" : "abc", 
//   "category" : "enhancement",
//   "upvote" : 112,
//   "status" : "suggestion",
//   "description" : "boom",
//   "comments" : 1
// }