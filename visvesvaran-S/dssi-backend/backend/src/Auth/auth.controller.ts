import { Controller, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller('user')
export class authController{
    @Post('/log-in')
    @UseGuards(AuthGuard('local'))
     login(){
        return "login sucess"
    }
}

 
