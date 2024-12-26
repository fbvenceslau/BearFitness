import { sequelize } from "../database"
import { DataTypes, Model, Optional } from "sequelize"

export interface MockUp {
  id: number
  model: string
  suppliersId: string
  note: string
}

export interface MockUpCreationAttributes extends Optional<MockUp, 'id'> { }

export interface MockUpInstace extends Model<MockUp, MockUpCreationAttributes>, MockUp { }

export const MockUp = sequelize.define<MockUpInstace, MockUp>('MockUp', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  model: {
    allowNull: false,
    type: DataTypes.STRING
  },
  suppliersId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'suppliers', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  note: {
    allowNull: false,
    type: DataTypes.STRING
  }
})