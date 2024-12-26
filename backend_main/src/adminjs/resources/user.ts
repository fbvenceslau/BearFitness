import { ResourceOptions } from "adminjs";

export const UserResourceOptions: ResourceOptions = {
  navigation: 'Administração',
  properties: {
    birth: {
      type: 'date'
    },
    password: {
      type: 'password'
    },
    role: {
      availableValues: [
        { value: 'admin', label: 'Administrador' },
        { value: 'seller', label: 'Vendedor' },
        { value: 'user', label: 'Cliente' }
      ]
    }
  },
  editProperties: ['firstName', 'lastName', 'phone', 'whatsapp', 'birth', 'email', 'password', 'role'], //Criar admin/resources/minimum_stocks/actions/new
  filterProperties: ['firstName', 'lastName', 'phone', 'whatsapp', 'birth', 'email', 'password', 'role'], //Filtrar
  listProperties: ['firstName', 'phone', 'whatsapp', 'birth', 'email','role'], //Listar admin/resources/minimum_stocks
  showProperties: ['firstName', 'lastName', 'phone', 'whatsapp', 'birth', 'email', 'role', 'createdAt', 'updatedAt'] //Mostrar admin/resources/minimum_stocks/records/1/show
}