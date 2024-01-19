# Use a imagem Node.js
FROM node:16

# Crie e defina o diretório de trabalho
WORKDIR /backend

# Copie os arquivos de origem para o diretório de trabalho
COPY ./backend/package.json ./
COPY ./backend/tsconfig.json ./
COPY ./backend/src ./src

# Instale as dependências
RUN npm install

# Expõe a porta necessária
EXPOSE 4000

# Comando para iniciar o aplicativo
CMD ["npm", "run", "dev"]
