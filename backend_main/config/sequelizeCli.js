// Configuração para o Sequelize-Cli conectar ao DB

module.exports = {
  development: {
    dialect: 'postgres',
    host: 'localhost',
    port: '5432',
    database: 'bearfitness_development',
    username: 'bearfitness',
    password: 'bearfitness'
  }
}