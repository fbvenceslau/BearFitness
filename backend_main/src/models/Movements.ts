import { sequelize } from "../database";
import { DataTypes, Model, Optional } from "sequelize";

export interface Movements {
  id: number;
  productId: number;
  flowId: number;
  quantity: number;
  current: string;
  note: string;
  userId: number;
}

export interface MovementsCreationAttributes extends Optional<Movements, 'id' | 'current' | 'note'> {}

export interface MovementsInstance extends Model<Movements, MovementsCreationAttributes>, Movements {}

export const Movements = sequelize.define<MovementsInstance, Movements>('Movements', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  productId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'products', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  flowId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'flows', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  },
  quantity: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  current: {
    allowNull: true,
    type: DataTypes.STRING
  },
  note: {
    allowNull: true,
    type: DataTypes.STRING
  },
  userId: {
    allowNull: false,
    type: DataTypes.INTEGER,
    references: { model: 'users', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT'
  }
});
