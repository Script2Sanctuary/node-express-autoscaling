# Menggunakan image node versi terbaru
FROM node:latest

# Menyalin file aplikasi ke dalam container
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

# Menjalankan aplikasi
EXPOSE 3000
CMD [ "node", "app.js" ]