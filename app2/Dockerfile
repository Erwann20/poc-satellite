# Utiliser une image Node.js
FROM node:16

WORKDIR /app2

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3001

CMD ["yarn", "dev"]