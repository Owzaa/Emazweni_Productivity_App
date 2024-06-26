/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AskAiWhereInput } from "./AskAiWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AskAiListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AskAiWhereInput,
  })
  @ValidateNested()
  @Type(() => AskAiWhereInput)
  @IsOptional()
  @Field(() => AskAiWhereInput, {
    nullable: true,
  })
  every?: AskAiWhereInput;

  @ApiProperty({
    required: false,
    type: () => AskAiWhereInput,
  })
  @ValidateNested()
  @Type(() => AskAiWhereInput)
  @IsOptional()
  @Field(() => AskAiWhereInput, {
    nullable: true,
  })
  some?: AskAiWhereInput;

  @ApiProperty({
    required: false,
    type: () => AskAiWhereInput,
  })
  @ValidateNested()
  @Type(() => AskAiWhereInput)
  @IsOptional()
  @Field(() => AskAiWhereInput, {
    nullable: true,
  })
  none?: AskAiWhereInput;
}
export { AskAiListRelationFilter as AskAiListRelationFilter };
