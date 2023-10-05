import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// ei entity ta pg admin database e add hobe .. 

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id:number;

  @Column({default : ""}) // {default : ""} ei ta must dite hobe .. 
  // na dile "violates not-null constraint "  ei error dibe 
  name :string;

 
}
