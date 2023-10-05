import { Module } from '@nestjs/common';
import { FeedbackService } from './feedback.service';
import { FeedbackController } from './feedback.controller';
import { Feedback } from './entities/feedback.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  // entity ta register korte hobe
  imports: [TypeOrmModule.forFeature([Feedback])],
  /** 
   * what this enable us to do, inject our repository into our service
   */
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule {}
