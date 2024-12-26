# BearFitness

## Criação do usuário no PostgreSQL (com a permissão de CREATEDB), do banco de dados e das tabelas e inicialização do servidor

- ```sudo -u postgres psql```
- ```CREATE USER bearfitness WITH CREATEDB ENCRYPTED PASSWORD 'bearfitness';```
- ```npx sequelize-cli db:create```
- ```npx sequelize-cli db:migrate```
- ```npm run dev```

## Seeder para criar o usuário raiz

- ```npx sequelize-cli db:seed:all```

## Instalação das dependências e iniciar o servidor

- ```npm install```: Instalar as dependências.