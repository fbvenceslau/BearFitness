import { DataTypes, Model } from "sequelize"
import { sequelize } from "../database"

export interface Like {
  userId: number
  productId: number
}

export interface LikeInstance extends Model<Like>, Like { }

export const Like = sequelize.define<LikeInstance, Like>('Like', {
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