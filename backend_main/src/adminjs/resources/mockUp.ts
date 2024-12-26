import { ResourceOptions } from "adminjs";

export const MockUpResourceOptions: ResourceOptions = {
  
  properties: {
    model: { isTitle: true }
  },

  navigation: 'Cadastros',
  editProperties: ['model', 'suppliersId','note'], //Criar admin/resources/minimum_stocks/actions/new
  filterProperties: ['model', 'suppliersId','note'], //Filtrar
  listProperties: ['model', 'suppliersId','note', 'createdAt', 'updatedAt'], //Listar admin/resources/minimum_stocks
  showProperties: ['model', 'suppliersId','note', 'createdAt', 'updatedAt'] //Mostrar admin/resources/minimum_stocks/records/1/show
}