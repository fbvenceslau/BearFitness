import { ResourceOptions } from "adminjs";

export const SupplierResourceOptions: ResourceOptions = {
  navigation: 'Cadastros',
  editProperties: ['name', 'phone', 'email', 'address', 'city', 'state', 'zipCode'], //Criar admin/resources/minimum_stocks/actions/new
  filterProperties: ['name', 'phone', 'email', 'address', 'city', 'state', 'zipCode', 'createdAt', 'updatedAt'], //Filtrar
  listProperties: ['name', 'phone', 'email', 'address', 'updatedAt'], //Listar admin/resources/minimum_stocks
  showProperties: ['name', 'phone', 'email', 'address', 'city', 'state', 'zipCode', 'createdAt', 'updatedAt'] //Mostrar admin/resources/minimum_stocks/records/1/show
}