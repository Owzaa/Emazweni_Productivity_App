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
import { ApiIntegrationWhereInput } from "./ApiIntegrationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ApiIntegrationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ApiIntegrationWhereInput,
  })
  @ValidateNested()
  @Type(() => ApiIntegrationWhereInput)
  @IsOptional()
  @Field(() => ApiIntegrationWhereInput, {
    nullable: true,
  })
  every?: ApiIntegrationWhereInput;

  @ApiProperty({
    required: false,
    type: () => ApiIntegrationWhereInput,
  })
  @ValidateNested()
  @Type(() => ApiIntegrationWhereInput)
  @IsOptional()
  @Field(() => ApiIntegrationWhereInput, {
    nullable: true,
  })
  some?: ApiIntegrationWhereInput;

  @ApiProperty({
    required: false,
    type: () => ApiIntegrationWhereInput,
  })
  @ValidateNested()
  @Type(() => ApiIntegrationWhereInput)
  @IsOptional()
  @Field(() => ApiIntegrationWhereInput, {
    nullable: true,
  })
  none?: ApiIntegrationWhereInput;
}
export { ApiIntegrationListRelationFilter as ApiIntegrationListRelationFilter };