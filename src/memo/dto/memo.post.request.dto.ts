import { IsString, IsNotEmpty } from "class-validator";
export class MemoPostReqDto {
    @IsNotEmpty({message: 'title이(가) 입력되지 않았습니다.'})
    @IsString()
    title: string;

    @IsNotEmpty({message: 'content이(가) 입력되지 않았습니다.'})
    @IsString()
    content: string;
}
