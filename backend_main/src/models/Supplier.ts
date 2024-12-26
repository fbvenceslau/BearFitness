import { sequelize } from "../database"
import { DataTypes, Model, Optional } from "sequelize"

export interface Supplier {
  id: number
  name: string
  phone: string
  email: string
  address: string
  city: string
  state: string
  zipCode: string
}

export interface SupplierCreationAttributes extends Optional<Supplier, 'id'> { }

export interface SupplierInstace extends Model<Supplier, SupplierCreationAttributes>, Supplier { }

export const Supplier = sequelize.define<SupplierInstace, Supplier>('Supplier', {
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
  phone: {
    allowNull: false,
    type: DataTypes.STRING,
    validate: {
      notNull: { msg: "You must enter Phone Number" },
      len: { args: [11,11], msg: 'Phone Number is invalid' },
      isInt: { msg: "You must enter Phone Number" },
    }
  },
  email: {
    allowNull: false,
    unique: true,
    type: DataTypes.STRING,
    validate: {
      isEmail: true
    }
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING
  },
  city: {
    allowNull: false,
    type: DataTypes.STRING
  },
  state: {
    allowNull: false,
    type: DataTypes.STRING
  },
  zipCode: {
    allowNull: false,
    type: DataTypes.STRING
  }
})