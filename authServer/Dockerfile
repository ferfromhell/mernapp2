FROM node:8.12.0

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
CMD node server.js
EXPOSE 8081
