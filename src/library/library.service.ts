import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema';
import { Model } from 'mongoose';
import { Library } from './schemas/library.schema';

@Injectable()
export class LibraryService {
    constructor(
        @InjectModel(Book.name) private bookModel : Model<Book>,
        @InjectModel(Library.name) private libraryModel: Model<Library>,
    ) {}
}
