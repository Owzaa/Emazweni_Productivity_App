/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BoardViewsWhereInput } from "./BoardViewsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BoardViewsOrderByInput } from "./BoardViewsOrderByInput";

@ArgsType()
class BoardViewsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BoardViewsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BoardViewsWhereInput, { nullable: true })
  @Type(() => BoardViewsWhereInput)
  where?: BoardViewsWhereInput;

  @ApiProperty({
    required: false,
    type: [BoardViewsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BoardViewsOrderByInput], { nullable: true })
  @Type(() => BoardViewsOrderByInput)
  orderBy?: Array<BoardViewsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BoardViewsFindManyArgs as BoardViewsFindManyArgs };
