import { ResourceOptions } from "adminjs";

export const FlowResourceOptions: ResourceOptions = {
  navigation: 'Configuração',
  editProperties: ['name'], //Criar admin/resources/minimum_stocks/actions/new
  filterProperties: ['name'], //Filtrar
  listProperties: ['name'], //Listar admin/resources/minimum_stocks
  showProperties: ['name', 'createdAt', 'updatedAt'] //Mostrar admin/resources/minimum_stocks/records/1/show
}