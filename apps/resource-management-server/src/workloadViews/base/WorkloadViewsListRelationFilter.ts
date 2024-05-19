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
import { WorkloadViewsWhereInput } from "./WorkloadViewsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WorkloadViewsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WorkloadViewsWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkloadViewsWhereInput)
  @IsOptional()
  @Field(() => WorkloadViewsWhereInput, {
    nullable: true,
  })
  every?: WorkloadViewsWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorkloadViewsWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkloadViewsWhereInput)
  @IsOptional()
  @Field(() => WorkloadViewsWhereInput, {
    nullable: true,
  })
  some?: WorkloadViewsWhereInput;

  @ApiProperty({
    required: false,
    type: () => WorkloadViewsWhereInput,
  })
  @ValidateNested()
  @Type(() => WorkloadViewsWhereInput)
  @IsOptional()
  @Field(() => WorkloadViewsWhereInput, {
    nullable: true,
  })
  none?: WorkloadViewsWhereInput;
}
export { WorkloadViewsListRelationFilter as WorkloadViewsListRelationFilter };