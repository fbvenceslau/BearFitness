import express from 'express'
import { sequelize } from './database'
import { adminJs, adminJsRouter } from './adminjs'
import { router } from './routes'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.static('public'))

app.use(express.json())

app.use(adminJs.options.rootPath, adminJsRouter)

app.use(router)

const PORT = process.env.port || 3000

app.listen(PORT, async () => {
  await sequelize
  .authenticate().then(() => {
    console.log(`Conexão com o Banco de Dados ${sequelize.config.database} realizada com sucesso!`)
  })

  console.log(`Servidor iniciado com sucesso na porta ${PORT}!`)
})