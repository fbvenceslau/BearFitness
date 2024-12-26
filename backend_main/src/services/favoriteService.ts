import { Favorite } from "../models/Favorite"

export const favoriteService = {
  findByUserId: async (userId: number) => {
    const favorites = await Favorite.findAll({
      attributes: [['user_id', 'userId']],
      where: { userId},
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
      products: favorites.map(favorite => favorite.Product)
    }
  },

	create: async (userId: number, productId: number) => {
    const favorite = await Favorite.create({
      userId,
      productId
    })

    return favorite
  },

  delete: async(userId: number, productId: number) => {
    await Favorite.destroy({
      where: {
        userId,
        productId
      }
    })
  },

  isFavorited: async(userId: number, productId: number) => {
    const favorite = await Favorite.findOne({
      where: {
        userId,
        productId
      }
    })

    return favorite !== null
  }
}