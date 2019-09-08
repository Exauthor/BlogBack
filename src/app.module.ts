import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesModule } from './articles/articles.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ArticlesModule, MongooseModule.forRoot('mongodb://mongo:27017')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
