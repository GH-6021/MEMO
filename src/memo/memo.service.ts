import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Memo } from './entity/memo.entity';
import { MemoPostReqDto } from './dto/memo.post.request.dto';
import { UpdateMemoDto } from './dto/memo.update.dto';
import { throwIfEmpty } from 'rxjs';

@Injectable()
export class MemoService {
constructor(
    @InjectRepository(Memo)
    private memoRepository:Repository<Memo>,
){}

async create(memoPostReqDto:MemoPostReqDto){
    this.memoRepository.save(memoPostReqDto).then(()=>throwIfEmpty());
}

findAll():Promise<Memo[]>{
    return this.memoRepository.find();
}

findOne(id:number):Promise<Memo>{
    return this.memoRepository.findOneBy({id});
}

async update(id:number,updateMemoDto:UpdateMemoDto){
    await this.memoRepository.update(id,updateMemoDto);
}

async remove(id:number){
    await this.memoRepository.delete(id);
}


}
