import { Module } from '@nestjs/common';
import { Employee2Service } from './employee2.service';

@Module({
  providers: [Employee2Service]
})
export class Employee2Module {}
