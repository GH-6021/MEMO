import { Injectable, NotFoundException, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Memo } from './entity/memo.entity';
import { MemoPostReqDto } from './dto/memo.post.request.dto';
import { UpdateMemoDto } from './dto/memo.update.dto';

@Injectable()
export class MemoService {
constructor(
    @InjectRepository(Memo)
    private memoRepository:Repository<Memo>,
){}

async create(memoPostReqDto:MemoPostReqDto): Promise<Memo>{
    const memo = this.memoRepository.create(memoPostReqDto);
    return await this.memoRepository.save(memo);
}

async findAll():Promise<Memo[]>{
    const memoes = await this.memoRepository.find();
    if(!memoes.length){
        throw new NotFoundException('메모를 찾을 수 없습니다.');
    }
    return memoes;
}

async findOne(id:number):Promise<Memo>{
    const memo = await this.memoRepository.findOneBy({id});
    if(!memo){
        throw new NotFoundException(id+' 메모를 찾을 수 없습니다.');
    }
    return memo;
}

async update(id:number,updateMemoDto:UpdateMemoDto){
    const memo = await this.memoRepository.findOneBy({id});
    if(!memo){
        throw new NotFoundException(id+' 메모를 찾을 수 없습니다.');
    }
    const result = await this.memoRepository.update(id,updateMemoDto);
    if(result.affected===0){
        throw new HttpException('메모 업데이트 실패',500);
    }
}

async remove(id:number){
    const memo = await this.memoRepository.findOneBy({id});
    if(!memo){
        throw new NotFoundException(id+' 메모를 찾을 수 없습니다.');
    }
    const result = await this.memoRepository.delete(id);
    if (result.affected===0) {
        throw new HttpException('메모 삭제 실패', 500);
    }
}


}
