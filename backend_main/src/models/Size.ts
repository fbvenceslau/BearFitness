import { sequelize } from "../database"
import { DataTypes, Model, Optional } from "sequelize"

export interface Size {
  id: number 
  size: string
}

export interface SizeCreationAttributes extends Optional<Size, 'id'> { }

export interface SizeInstace extends Model<Size, SizeCreationAttributes>, Size { }

export const Size = sequelize.define<SizeInstace, Size>('Size', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  size: {
    allowNull: false,
    type: DataTypes.STRING,
  }
})