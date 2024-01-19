# Use a imagem Node.js
FROM node:14

# Crie e defina o diretório de trabalho
WORKDIR /usr/src/app

# Copie os arquivos de origem para o diretório de trabalho
COPY ./frontend/package.json ./
COPY ./frontend/public ./public
COPY ./frontend/src ./src

# Instale as dependências
RUN npm install

# Compila o código TypeScript
RUN npm run build

# Expõe a porta necessária
EXPOSE 5173

# Comando para iniciar o aplicativo
CMD ["npm", "start"]
