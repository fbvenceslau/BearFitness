import { Request, Response } from 'express'
import { getPaginationParams } from '../helpers/getPaginationParams'
import { productService } from '../services/productService'

export const productsController = {

  index: async (req: Request, res: Response) => {
    const [page, perPage] = getPaginationParams(req.query)

    try {
      const paginatedProducts = await productService.findAllPaginated(page, perPage)

      return res.json(paginatedProducts)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  // GET /products/:id
  show: async (req: Request, res: Response) => {
   
    const productId = req.params.id
    try {
      const newestCourses = await productService.findByIdWithProduct(productId)
      return res.json(newestCourses)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  // GET /products/popular
  popular: async (req: Request, res: Response) => {
    try {
      const topTen = await productService.getTopTenByLikes()
      return res.json(topTen)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}