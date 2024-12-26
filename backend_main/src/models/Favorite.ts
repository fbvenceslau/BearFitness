import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database"
import { ProductInstance } from "./Product"
import { UserInstance } from "./User"

export interface Favorite {
  userId: number
  productId: number
}

export interface FavoriteInstance extends Model<Favorite>, Favorite {
  User?: UserInstance
  Product?: ProductInstance
}

export const Favorite = sequelize.define<FavoriteInstance, Favorite>('Favorite', {
  userId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  productId: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.INTEGER,
    references: {
      model: 'products',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
})