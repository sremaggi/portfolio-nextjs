# Usar una imagen base de Node.js
FROM node:18

# Crear directorio de trabajo
WORKDIR /app

# Copiar los archivos de paquetes y instalar dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Indicar el puerto en el que se ejecutará la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
