import {Controller, Post,Body} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDTO} from "../user/dto";
import {UserLoginDTO} from "./dto";
import {ApiResponse, ApiTags} from "@nestjs/swagger";
import {AuthUserResponse} from "./response";
import {UseGuards} from "@nestjs/common";
import{JwtAuthGuard} from "../../guards/jwt-guard";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @ApiTags('API')
    @ApiResponse({status: 201, type: CreateUserDTO})
    @Post('register')
    register(@Body() dto: CreateUserDTO):Promise<CreateUserDTO>{
        return this.authService.registerUsers(dto)
    }
    @ApiTags('API')
    @ApiResponse({status: 200, type: AuthUserResponse })
    @Post('login')
    login(@Body() dto: UserLoginDTO){
        return this.authService.loginUser(dto)
    }


    @UseGuards(JwtAuthGuard)

    @Post('test')
    test(){
        return true
    }



}
