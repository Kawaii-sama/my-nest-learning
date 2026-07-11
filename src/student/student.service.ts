import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {

    private students = [
        {id : 1, name:"Pratibha", age: 22} ,
        {id : 2, name:"Pragya", age: 24}
    ];

    getAllStudent() {
        return this.students;
    }

    getStudentById( id : number) {
        const student = this.students.find((s) => s.id === id);
        if(!student) throw new NotFoundException('Student Not Found!');
        return student;
    }
}
