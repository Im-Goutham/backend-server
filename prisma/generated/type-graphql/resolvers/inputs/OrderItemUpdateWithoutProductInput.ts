import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { OrderUpdateOneRequiredWithoutItemsNestedInput } from "../inputs/OrderUpdateOneRequiredWithoutItemsNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("OrderItemUpdateWithoutProductInput", {
  isAbstract: true
})
export class OrderItemUpdateWithoutProductInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => OrderUpdateOneRequiredWithoutItemsNestedInput, {
    nullable: true
  })
  order?: OrderUpdateOneRequiredWithoutItemsNestedInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  quantity?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => FloatFieldUpdateOperationsInput, {
    nullable: true
  })
  price?: FloatFieldUpdateOperationsInput | undefined;
}
