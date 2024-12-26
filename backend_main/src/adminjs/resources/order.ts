import { ResourceOptions } from "adminjs";

export const OrderResourceOptions: ResourceOptions = {
navigation: 'Pedido',
  editProperties: ['productId', 'userId','quantity', 'status'], //Criar admin/resources/minimum_stocks/actions/new
  filterProperties: ['order', 'productId', 'userId','quantity', 'status', 'createdAt', 'updatedAt'], //Filtrar
  listProperties: ['order', 'productId', 'userId','quantity', 'status', 'createdAt', 'updatedAt'], //Listar admin/resources/minimum_stocks
  showProperties: ['order', 'productId', 'userId','quantity', 'status', 'createdAt', 'updatedAt'] //Mostrar admin/resources/minimum_stocks/records/1/show
}