# Utiliser une image Node.js
FROM node:16

WORKDIR /app1

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "dev"]