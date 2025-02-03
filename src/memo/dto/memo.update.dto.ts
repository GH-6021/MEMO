import { MemoPostReqDto } from "./memo.post.request.dto";
import { PartialType } from "@nestjs/mapped-types";
export class UpdateMemoDto extends PartialType(MemoPostReqDto){}