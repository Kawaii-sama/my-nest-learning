import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee2 } from './schemas/employee2.schema';
import { Profile } from './schemas/profile.schema';

@Injectable()
export class Employee2Service {
    constructor(
        @InjectModel(Employee2.name) private employee2Model: Model <Employee2>,
        @InjectModel(Profile.name) private profileModel: Model <Profile>
    ) {}
}
