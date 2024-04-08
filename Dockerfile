FROM node:14

WORKDIR /app

COPY package.json package-lock.json ./
COPY app.js ./
COPY views ./views

RUN npm install

EXPOSE 5000

CMD ["node", "app.js"]
