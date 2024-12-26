import { ResourceOptions} from "adminjs";

export const MovementsResourceFeatures: ResourceOptions = {
  navigation: 'Produtos',
  editProperties: ['productId', 'flowId', 'quantity', 'note', 'userId'],
  filterProperties: ['productId', 'flowId', 'quantity', 'note', 'userId'],
  listProperties: ['productId', 'flowId', 'quantity', 'note', 'userId', 'createdAt', 'updatedAt'],
  showProperties: ['productId', 'flowId', 'quantity', 'note', 'userId', 'updatedAt'],
};
