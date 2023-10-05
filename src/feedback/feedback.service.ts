import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Feedback } from './entities/feedback.entity';
import { InsertResult, DeleteResult, UpdateResult} from 'typeorm'
 
@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback) private feedbacksRepository:Repository <Feedback>
  ){}
  async getAllFeedback() : Promise<Feedback[]>{
    console.log('-------------------------------------')
    console.log(typeof process.env.DB_PASSWORD)
    return this.feedbacksRepository.find(); // it returns all data
  }

  //dto create korte hobe .. data transfer object 
  // InsertResult er jaygay o ki CreateFeedbackDto ei ta likhte hobe ? 😢
  async addFeedback(feedback : CreateFeedbackDto) : Promise<InsertResult>{
    return this .feedbacksRepository.insert(feedback);
  }

  // id : number // type any rakha uchit na 😢
  async findOneFeedback(id: string | number | any):Promise<Feedback | null>{
    
    if(id != null && id != undefined){
      return this.feedbacksRepository.findOne({where : {id}});
    }
    
  }

  async updateOneFeedback (id : number | string, feedback: Feedback):Promise<Feedback>{
    // amra ekhane kichu validation korbo 
    const feedbackToUpdate = await this.findOneFeedback(id);
    if(feedbackToUpdate == undefined){
      throw new NotFoundException();
    }
    await this.feedbacksRepository.update(id, feedback);
    return this.findOneFeedback(id);
  }

  async deleteOneFeedback (id : number |string):Promise<DeleteResult>{
    // amra ekhane kichu validation korbo 
    const feedbackToDelete = await this.findOneFeedback(id);
    if(feedbackToDelete == undefined){
      throw new NotFoundException();
    }
    return this.feedbacksRepository.delete(id);
    // better hoito .. kon id ta delete hoilo .. sheta jodi return korto 😢
  }
}
