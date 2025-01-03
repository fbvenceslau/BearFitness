# Projeto: Portofolio de produtos

## Instalação das primeiras dependências e inicialização do servidor

### Iniciar e configurar

- ``` npm init ```

### Dependêcias Back-End

- ```npm i express@~4.17.2 express-formidable@~1.2.0 adminjs@~5.5.1 @adminjs/express@~4.0.1 @adminjs/sequelize@~2.1.0 @adminjs/upload@~2.0.1 pg@~8.7.1 sequelize@~6.13.0```
- ```npm i -D typescript@~4.5.4 ts-node-dev@~1.1.8 sequelize-cli@~6.4.1 @types/express@~4.17.13 @types/node@~17.0.10```

#### Arquivo de configuração do TS

- ``` npx tsc --init ```

#### Criação do usuário da Data Base usando o dialeto PostgreSQL

- Caso ainda não possua um usuário no PostgreSQL, crie um com a permissão CREATEDB:
- ```sudo -u postgres psql```
- ```CREATE USER user WITH CREATEDB ENCRYPTED PASSWORD 'password';```

#### Criação da Data Base usando o SequelizaCLI

- ``` npx sequelize-cli db:create ```

### Dependências Fron-End

- ```npm install aos@2.3.4 axios@0.26.1 bootstrap@5.1.3 swr@1.3.0 react-modal@3.14.4 react-player@2.10.0 reactstrap@9.0.2 sass@1.50.1 --legacy-peer-deps```
- ```npm install @types/aos@3.0.4 @types/react-modal@3.13.1 -D --legacy-peer-deps```
