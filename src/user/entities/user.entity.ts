import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// ei entity ta pg admin database e add hobe .. 

@Entity() // er moddheo table er nam bole dite pari ("");
export class User {
  @PrimaryGeneratedColumn()
  id:number;

  @Column({default : ""}) // {default : ""} ei ta must dite hobe .. 
  // na dile "violates not-null constraint "  ei error dibe 
  name :string;

  @Column({default : ""}) // {default : ""} ei ta must dite hobe .. 
  username :string;

  @Column({default : ""}) // {default : ""} ei ta must dite hobe .. 
  password :string;

 
}
