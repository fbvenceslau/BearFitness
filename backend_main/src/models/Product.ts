import { sequelize } from "../database"
import { DataTypes, Model, Optional } from "sequelize"

export interface Product {
  id: number
  name: string
  thumbnailUrl: string
  description: string
  mockUpId: number
  costPrice: string
  salePrice: string
  sizeId: number
  minimumStockId: number
  link: string
  featured: boolean
}

export interface ProductCreationAttributes extends Optional<Product, 'id' | 'thumbnailUrl'> { }

export interface ProductInstance extends Model<Product>, Product {}

export const Product = sequelize.define<ProductInstance, Product>('Product', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  thumbnailUrl: {
    allowNull: true,
    type: DataTypes.STRING
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING
  },
  mockUpId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'mock_ups', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  costPrice: {
    allowNull: false,
    type: DataTypes.STRING
  },
  salePrice: {
    allowNull: false,
    type: DataTypes.STRING
  },
  sizeId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'sizes', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  minimumStockId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'minimum_stocks', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  link: {
    allowNull: false,
    type: DataTypes.STRING
  },
  featured: {
    defaultValue: false,
    type: DataTypes.BOOLEAN
  }
})