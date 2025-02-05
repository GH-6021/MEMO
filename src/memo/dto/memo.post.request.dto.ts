import { IsString, IsNotEmpty } from "class-validator";
export class MemoPostReqDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;
}
