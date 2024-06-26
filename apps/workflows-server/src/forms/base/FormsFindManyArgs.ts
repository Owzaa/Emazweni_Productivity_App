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
import { FormsWhereInput } from "./FormsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FormsOrderByInput } from "./FormsOrderByInput";

@ArgsType()
class FormsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FormsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FormsWhereInput, { nullable: true })
  @Type(() => FormsWhereInput)
  where?: FormsWhereInput;

  @ApiProperty({
    required: false,
    type: [FormsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FormsOrderByInput], { nullable: true })
  @Type(() => FormsOrderByInput)
  orderBy?: Array<FormsOrderByInput>;

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

export { FormsFindManyArgs as FormsFindManyArgs };
