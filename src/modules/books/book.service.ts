import { Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Book} from "./models/model_of_book";
import {CreateBookDTO} from "./dto";

@Injectable()
export class BookService {
    constructor(@InjectModel(Book)  readonly bookRepository: typeof Book) {}

    async createBook(dto: CreateBookDTO):Promise<CreateBookDTO>{
        const newBook = {
            bookName: dto.bookName,
            authorName: dto.authorName,
            yearOfPub: dto.yearOfPub,
            description: dto.description,
        }
        await this.bookRepository.create(newBook)
        return dto
    }
}