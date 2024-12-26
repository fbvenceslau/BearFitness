import { ResourceWithOptions } from "adminjs";
import { MinimumStock, MockUp, Order, Size, Product, Supplier, User, Movements } from "../../models";

import { MinimumStockResourceOptions } from "./minimumStock";
import { SizeResourceOptions } from "./size";
import { productResourceFeatures, productResourceOptions } from "./product";
import { SupplierResourceOptions } from "./supplier";
import { MockUpResourceOptions } from "./mockUp";
import { UserResourceOptions } from "./user";
import { OrderResourceOptions } from "./order";
import { Situation } from "../../models/Situation";
import { SituationsResourceOptions } from "./situation";
import { MovementsResourceFeatures } from "./movements";
import { Flow } from "../../models/Flow";
import { FlowResourceOptions } from "./flow";

export const adminJsResources: ResourceWithOptions[] = [
  // Pedidos
  {
    resource: Order,
    options: OrderResourceOptions
  },

  // Configurações
  {
    resource: MinimumStock,
    options: MinimumStockResourceOptions
  },{
    resource: Size,
    options: SizeResourceOptions
  }, {
    resource: Situation,
    options: SituationsResourceOptions
  }, {
    resource: Flow,
    options: FlowResourceOptions
  },

    // Produtos
    {
      resource: Product,
      options: productResourceOptions,
      features: productResourceFeatures,
    }, {
      resource: Movements,
      options: MovementsResourceFeatures
    },

  //Cadastros
  {
    resource: Supplier,
    options: SupplierResourceOptions
  }, {
    resource: MockUp,
    options: MockUpResourceOptions
  }, {
    resource: User,
    options: UserResourceOptions
  }  
]