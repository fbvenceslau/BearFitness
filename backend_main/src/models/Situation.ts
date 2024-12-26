import { sequelize } from "../database"
import { DataTypes, Model, Optional } from "sequelize"

export interface Situation {
  id: number 
  situation: string
}

export interface SituationCreationAttributes extends Optional<Situation, 'id'> { }

export interface SituationInstace extends Model<Situation, SituationCreationAttributes>, Situation { }

export const Situation = sequelize.define<SituationInstace, Situation>('Situation', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  situation: {
    allowNull: false,
    type: DataTypes.STRING
  }
})