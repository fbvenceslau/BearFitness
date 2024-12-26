import { Op } from "sequelize"
import { Order } from "../models"

export const orderService = {  
  findByUserId: async (userId: number) => {
    const orders = await Order.findAll({
      attributes: [
        ['user_id', 'userId'],
        'quantity'
      ],
      where: { userId },
      include: {
        association: 'Product',
        attributes: [
          'id',
          'name',
          ['thumbnail_url','thumbnailUrl'],
          'description',
          'mockUpId',
          'salePrice',
          'sizeId',
          'link'
        ]
      }
    })

    return {
      userId,
      products: orders.map(order => ({
        product: order.Product, // Dados do produto
        quantity: order.quantity // Inclui o campo quantity
      }))
    }
  },

  findByName: async (name: string) => {
    const { count, rows } = await Order.findAndCountAll({
      attributes: [
        'id',
        'order',
        'productId',
        'userId',
        'quantity',
        'status'
      ],
      where: {
        userId: {
          [Op.iLike]: `%${name}%`
        }
      }
    })
    return {
      orders: rows,
      total: count
    }
  }
}