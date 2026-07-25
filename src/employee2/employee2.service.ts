import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee2 } from './schemas/employee2.schema';
import { Profile } from './schemas/profile.schema';
import { Model } from 'mongoose';

@Injectable()
export class Employee2Service {
    constructor(
        @InjectModel(Employee2.name) private employee2Model: Model<Employee2>,
        @InjectModel(Profile.name) private profileModel: Model <Profile>,
    ) {}

    async createEmployee2(): Promise<Employee2>{
        const profile = await new this.profileModel ({
            age : 20,
            qualifictaion : 'Masters'
        }).save();

        const employee2 = await new this.employee2Model ({
            name: 'Pratibha',
            profile : profile._id
        });

        return employee2.save();
    }
}
