import { Response } from 'express'
import { likeService } from '../services/likeService'
import { AuthenticatedRequest } from '../middlewares/auth'

export const likesController = {
  // POST /likes
  save: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id
    const { productId } = req.body

    try {
      const like = await likeService.create(userId, productId)
      return res.status(201).json(like)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  // DELETE /likes/:id
  delete: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id
    const productId = req.params.id

    try {
      await likeService.delete(userId, Number(productId))
      return res.status(204).send()
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}