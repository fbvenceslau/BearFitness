import { Request, Response } from 'express'
import { AuthenticatedRequest } from "../middlewares/auth";
import { orderService } from '../services/orderService';

export const ordersController = {
  // GET /orders
  index: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id

    try {
      const orders = await orderService.findByUserId(userId)
      return res.json(orders)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}