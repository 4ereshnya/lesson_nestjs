import { IsNumber, IsString} from 'class-validator'
import {ApiProperty} from "@nestjs/swagger";

export class CreateBookDTO{

    @ApiProperty()
    @IsNumber()
    id: number


    @ApiProperty()
    @IsString()
    bookName: string


    @ApiProperty()
    @IsString()
    authorName: string


//year of publishing
    @ApiProperty()
    @IsString()
    yearOfPub: string
//description
    @ApiProperty()
    @IsString()
    description: string

    @ApiProperty()
    @IsString()
    authorId: number

}