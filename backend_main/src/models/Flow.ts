import { sequelize } from "../database"
import { DataTypes, Model, Optional } from "sequelize"

export interface Flow {
  id: number 
  name: string
}

export interface FlowCreationAttributes extends Optional<Flow, 'id'> { }

export interface FlowInstace extends Model<Flow, FlowCreationAttributes>, Flow { }

export const Flow = sequelize.define<FlowInstace, Flow>('Flow', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  }
})