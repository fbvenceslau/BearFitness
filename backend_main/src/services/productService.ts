import { Product } from '../models'

export const productService = {
  // findAllPaginated: async (page: number, perPage: number) => {
  //   const offset = (page - 1) * perPage

  //   const { count, rows } = await Product.findAndCountAll({
  //     attributes: [
  //       'id',
  //       'name', 
  //       ['thumbnail_url', 'thumbnailUrl'],
  //       'description', 
  //       'mockUpId', 
  //       'costPrice', 
  //       'salePrice', 
  //       'sizeId',
  //       'minimumStockId', 
  //       'link', 
  //       'featured',
  //       'updatedAt'
  //       ],
  //       order: [['updatedAt', 'ASC']],
  //       limit: perPage,
  //       offset
  //     })

  //     return {
  //       products: rows,
  //       page,
  //       perPage,
  //       total: count
  //     }
  //   }, 

  findAllPaginated: async (page: number, perPage: number) => {
      const results = await Product.sequelize?.query(
        `SELECT
          products.id,
          products.name,
          products.thumbnail_url AS thumbnailUrl,
          products.description,
          products.link
        FROM products`
      )
      if (results) {
        const [topTen] = results
        return topTen
      } else {
        return null
      }
    },

    getTopTenByLikes: async () => {
      const results = await Product.sequelize?.query(
        `SELECT
          products.id,
          products.name,
          products.thumbnail_url AS thumbnailUrl,
          products.description,
          products.link,
          COUNT(users.id) AS likes
        FROM products
          LEFT OUTER JOIN likes
            ON products.id = likes.product_id
            INNER JOIN users
              ON users.id = likes.user_id
        GROUP BY products.id
        ORDER BY likes DESC
        LIMIT 10;`
      )
  
      if (results) {
        const [topTen] = results
        return topTen
      } else {
        return null
      }
    },

  findByIdWithProduct: async (id: string) => {
    const categoryWithCourses = await Product.findByPk(id, {
      attributes: [
        'id',
        'name', 
        ['thumbnail_url', 'thumbnailUrl'],
        'description', 
        'mockUpId', 
        'costPrice', 
        'salePrice', 
        'sizeId',
        'minimumStockId', 
        'link', 
        'featured'
      ],
      include: {
        association: 'size',
        attributes: [
          'id', 
          'size', 
        ],
      }
    })

    return categoryWithCourses
  }
} 