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
import { CustomStatusesWhereInput } from "./CustomStatusesWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CustomStatusesListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CustomStatusesWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomStatusesWhereInput)
  @IsOptional()
  @Field(() => CustomStatusesWhereInput, {
    nullable: true,
  })
  every?: CustomStatusesWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomStatusesWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomStatusesWhereInput)
  @IsOptional()
  @Field(() => CustomStatusesWhereInput, {
    nullable: true,
  })
  some?: CustomStatusesWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomStatusesWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomStatusesWhereInput)
  @IsOptional()
  @Field(() => CustomStatusesWhereInput, {
    nullable: true,
  })
  none?: CustomStatusesWhereInput;
}
export { CustomStatusesListRelationFilter as CustomStatusesListRelationFilter };
