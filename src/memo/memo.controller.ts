import { Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe} from '@nestjs/common';
import { MemoService } from './memo.service';
import { MemoPostReqDto } from './dto/memo.post.request.dto';
import { UpdateMemoDto } from './dto/memo.update.dto';

@Controller('memo')
export class MemoController {
    private readonly memoService:MemoService;
    constructor(memoService:MemoService){
        this.memoService = memoService;
    }

    @Post()
    create(@Body() memoPostReqDto:MemoPostReqDto){
        return this.memoService.create(memoPostReqDto);
    }

    @Get()
    findAll(){
        return this.memoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id:number){
        return this.memoService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id',ParseIntPipe) id:number,@Body() updateMemoDto:UpdateMemoDto){
        return this.memoService.update(id, updateMemoDto);
    }

    @Delete(':id')
    remove(@Param('id',ParseIntPipe) id:number){
        return this.memoService.remove(id);
    }

}
