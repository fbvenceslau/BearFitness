import { ResourceOptions } from "adminjs";

export const SituationsResourceOptions: ResourceOptions = {
  navigation: 'Configuração',  
 
  properties: {
    situation: { isTitle: true }
  },

  editProperties: ['situation'], //Criar admin/resources/minimum_stocks/actions/new
  filterProperties: ['situation'], //Filtrar
  listProperties: ['situation'], //Listar admin/resources/minimum_stocks
  showProperties: ['situation', 'createdAt', 'updatedAt'] //Mostrar admin/resources/minimum_stocks/records/1/show
}