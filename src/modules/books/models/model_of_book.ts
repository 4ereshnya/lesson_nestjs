import {Column, Model} from "sequelize-typescript";
import {Table} from "sequelize-typescript";
import {IsString} from "class-validator";
@Table
export class Book extends Model {
    @Column
    id: number

    @Column
    bookName: string

    @Column
    authorName: string

    @Column
    yearOfPub: string


    @Column
    description: string

    @Column
    authorId: number

}