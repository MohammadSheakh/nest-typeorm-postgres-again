import { Feedback } from "src/feedback/entities/feedback.entity";
import { User } from "src/user/entities/user.entity";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";


const config:any | MysqlConnectionOptions | PostgresConnectionOptions = {
  type: 'postgres', // sqlite
  host:'localhost', // new
  post: 5432, // new
  username: 'postgres', // new
  password: '509812**',
  database : 'postgres', // filename 
  entities : [Feedback, User], // dist er pore src thakbe na 
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