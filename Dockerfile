# FROM node:20-alpine AS builder

# WORKDIR /app

# COPY package.json package-lock.json ./

# RUN npm install && npm install firebase

# COPY . .

# RUN npm run build


# FROM nginx:stable-alpine
# COPY --from=builder /app/dist /usr/share/nginx/html
# CMD ["nginx", "-g", "daemon off;"]

# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install && npm install firebase
COPY . .
RUN npm run build

# Apache stage
FROM httpd:2.4
COPY --from=builder /app/dist /usr/local/apache2/htdocs/

# Konfigurasi Apache bisa ditambahkan di sini jika diperlukan
# COPY ./my-httpd.conf /usr/local/apache2/conf/httpd.conf

EXPOSE 80
CMD ["httpd-foreground"]
