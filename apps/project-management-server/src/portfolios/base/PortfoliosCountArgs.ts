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
import { PortfoliosWhereInput } from "./PortfoliosWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class PortfoliosCountArgs {
  @ApiProperty({
    required: false,
    type: () => PortfoliosWhereInput,
  })
  @Field(() => PortfoliosWhereInput, { nullable: true })
  @Type(() => PortfoliosWhereInput)
  where?: PortfoliosWhereInput;
}

export { PortfoliosCountArgs as PortfoliosCountArgs };
