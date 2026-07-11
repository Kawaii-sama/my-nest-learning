import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    getCategories(){
        return ['Mobile', 'Tablet', 'Laptop'];
    }
}
