import { Module } from '@nestjs/common';
import { User1Service } from './user1.service';
import { User1Controller } from './user1.controller';

@Module({
  providers: [User1Service],
  controllers: [User1Controller]
})
export class User1Module {}
