import { sequelize } from "../database"
import { DataTypes, Model, Optional } from "sequelize"

export interface MinimumStock {
  id: number 
  minimumQuantity: number
  alertActive: boolean
}

export interface MinimumStockCreationAttributes extends Optional<MinimumStock, 'id'> { }

export interface MinimumStockInstace extends Model<MinimumStock, MinimumStockCreationAttributes>, MinimumStock { }

export const MinimumStock = sequelize.define<MinimumStockInstace, MinimumStock>('MinimumStock', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  minimumQuantity: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  alertActive: {
    defaultValue: false,
    type: DataTypes.BOOLEAN
  }
})