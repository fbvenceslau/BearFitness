import { ResourceOptions } from "adminjs";

export const MinimumStockResourceOptions: ResourceOptions = {
  navigation: 'Configuração',
  properties: {
    minimumQuantity: { isTitle: true }
  },
  editProperties: ['minimumQuantity', 'alertActive'], //Criar admin/resources/minimum_stocks/actions/new
  filterProperties: ['minimumQuantity', 'alertActive'], //Filtrar
  listProperties: ['minimumQuantity', 'alertActive'], //Listar admin/resources/minimum_stocks
  showProperties: ['minimumQuantity', 'alertActive', 'createdAt', 'updatedAt'] //Mostrar admin/resources/minimum_stocks/records/1/show
}