import { Sequelize } from "sequelize";

export const sequelize = new Sequelize ({
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'bearfitness_development',
  username: 'bearfitness',
  password: 'bearfitness',
  define: {
     underscored: true // Converter o formato snake_case (usado no DB) para camelCase (usado no JS)
  }

})