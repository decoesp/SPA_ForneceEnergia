# Use a imagem Node.js
FROM node:16

# Crie e defina o diretório de trabalho
WORKDIR /frontend

# Copie os arquivos de origem para o diretório de trabalho
COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./
COPY ./frontend/src ./src

# Instale as dependências
RUN npm install

# Expõe a porta necessária
EXPOSE 5173

# Comando para iniciar o aplicativo
CMD ["npm", "run", "dev"]
