# Usar una imagen de Node como base
FROM node:20

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY package.json package-lock.json ./
COPY app.js ./

# Instalar las dependencias
RUN npm install

# Exponer el puerto 9000
EXPOSE 9000

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
