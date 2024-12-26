import { sequelize } from "../database"
import { DataTypes, Model, Optional } from "sequelize"
import { ProductInstance } from "./Product"
import { UserInstance } from "./User"

export interface Order {
  id: number
  order: number
  productId: number
  userId: number
  quantity: number
  status: number
}

export interface OrderCreationAttributes extends Optional<Order, 'id' | 'order'> { }

export interface OrderInstace extends Model<Order, OrderCreationAttributes>, Order {
    User?: UserInstance
    Product?: ProductInstance
}

export const Order = sequelize.define<OrderInstace, Order>('Order', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  order: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  productId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'products', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'users', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  quantity: {
    allowNull: true,
    type: DataTypes.INTEGER
  },
  status: {
    allowNull: true,
    type: DataTypes.INTEGER,
    references: { model: 'situations', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  }
}, {
  hooks: {
    beforeCreate: (order) => {
      // Gera um número aleatório de 8 dígitos
      order.order = Math.floor(10000000 + Math.random() * 90000000);
    }
  }
})