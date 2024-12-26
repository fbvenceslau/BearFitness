import AdminJS, { PageHandler } from "adminjs"
import { MockUp, Order, Product, Supplier, User } from "../models"

export const dashboardOption: {
  handler?: PageHandler
  component?: string
} = {
  component: AdminJS.bundle('./components/Dashboard'),
  handler: async (req, res, context) => {
    const order = await Order.count()
    const product = await Product.count()
    const supplier = await Supplier.count()
    const mockUp = await MockUp.count()
    const standardUsers = await User.count({ where: { role: 'user' } })

    res.json({
      'Pedidos': order,
      'Produtos': product,
      'Fornecedores': supplier,
      'Modelos': mockUp,
      'Usuários': standardUsers
    })
  },
}