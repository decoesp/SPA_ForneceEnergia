# Use a imagem Node.js
FROM node:14

# Crie e defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos de origem para o diretório de trabalho
COPY ./backend/package.json ./
COPY ./backend/tsconfig.json ./
COPY ./backend/src ./src

# Instale as dependências
RUN npm install

# Compile o código TypeScript
RUN npm run build

# Expõe a porta necessária
EXPOSE 4000

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
