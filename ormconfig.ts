import { Feedback } from "src/feedback/entities/feedback.entity";
import { User } from "src/user/entities/user.entity";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";


const config:any | MysqlConnectionOptions | PostgresConnectionOptions = {
  type: 'postgres', // sqlite
  host:'localhost', // new // database host name 
  post: 5432, // new
  username: 'postgres', // new
  password : '509812**', //  this password should be 
  //password: process.env.DB_PASSWORD,
  database : 'postgres', // filename 
  entities : [Feedback, User], // dist er pore src thakbe na 
  // 🔰 autoLoadEntities : true, // not for production version 
  synchronize : true, // production e true rakha jabe na  // 
  //logging: true,

  /**
   * production e amra migrations use kori 
   */

  // migrations:[
  //   // migration ke kon folder e typeorm khuje pabe 
  // ],
  // cli : {
  //   // where to put the migrations 
  //   migrationsDir : './src/db/migrations' // 🔴 it was give me error 
   
  // }
}

export default config;