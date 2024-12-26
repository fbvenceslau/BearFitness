import { ResourceOptions } from "adminjs";

export const SizeResourceOptions: ResourceOptions = {
  navigation: 'Configuração',

  properties: {
    size: { isTitle: true }
  },

  editProperties: ['size'], 
  filterProperties: ['size'], 
  listProperties: ['id', 'size'], 
  showProperties: ['size', 'createdAt', 'updatedAt']
}