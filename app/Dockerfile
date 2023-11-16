# Utiliser une image Node.js
FROM node:16

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3002

CMD ["yarn", "dev"]