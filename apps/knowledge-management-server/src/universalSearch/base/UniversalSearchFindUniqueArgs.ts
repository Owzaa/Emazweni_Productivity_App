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
import { UniversalSearchWhereUniqueInput } from "./UniversalSearchWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class UniversalSearchFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => UniversalSearchWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UniversalSearchWhereUniqueInput)
  @Field(() => UniversalSearchWhereUniqueInput, { nullable: false })
  where!: UniversalSearchWhereUniqueInput;
}

export { UniversalSearchFindUniqueArgs as UniversalSearchFindUniqueArgs };
