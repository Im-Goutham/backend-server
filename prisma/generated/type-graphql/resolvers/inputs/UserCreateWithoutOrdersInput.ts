import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserProviderCreateNestedManyWithoutUserInput } from "../inputs/UserProviderCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutOrdersInput", {
  isAbstract: true
})
export class UserCreateWithoutOrdersInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  password?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => UserProviderCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  providers?: UserProviderCreateNestedManyWithoutUserInput | undefined;
}
