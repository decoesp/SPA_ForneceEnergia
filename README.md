# SPA_ForneceEnergia

Este projeto é uma Single Page Application (SPA) desenvolvida para a escolha de fornecedores de energia elétrica com base no consumo mensal informado pelo usuário.

## Requisitos do Produto
O usuário deve informar seu consumo mensal de energia, por exemplo, 30000 kWh (um número fictício maior que 0).
O sistema mostrará os fornecedores que podem atender às necessidades do cliente.
Cada fornecedor possui informações como nome, logo, estado de origem, custo por kWh, limite mínimo de kWh, número total de clientes e avaliação média dos clientes.
Um fornecedor só pode atender um cliente se o consumo mensal de energia deste for maior do que o limite mínimo de kWh do fornecedor.
## Tecnologias Utilizadas
## Backend
Node.js com Express
TypeScript
GraphQL com Apollo Server
## Frontend
React
TypeScript
GraphQL com Apollo Client
Vite para desenvolvimento rápido
Tailwind CSS para estilização

## Instruções de Uso

Clonar o Repositório
```sh
git clone https://github.com/decoesp/SPA_ForneceEnergia.git
```
 Instalação de Dependências:

No diretório backend, execute:
```sh
npm install
```
No diretório frontend, execute:
```sh
npm install
```

## Execução do Projeto:
No diretório backend, execute:

```sh
npm start dev
```
O servidor GraphQL estará disponível em http://localhost:4000.

No diretório frontend, execute:
```sh
npm run dev 
or
npm run start
```
A aplicação React estará disponível em http://localhost:5173.


## Docker:

Certifique-se de ter o Docker instalado.

Execute:

```sh
docker-compose up
```
Isso iniciará os containers para o backend e frontend.

Acesso à Aplicação:

Acesse a aplicação em http://localhost:5173.

Acesso à Interface do GraphQL:

Acesse a interface do GraphQL em http://localhost:4000/graphql.






