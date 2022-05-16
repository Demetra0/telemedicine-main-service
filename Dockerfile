FROM node:16.15.0-alpine

WORKDIR /app

COPY package*.json ./

RUN rm -rf node_modules

RUN npm install

COPY . .

RUN npm install bcrypt -g

RUN npm run build

CMD ["npm", "run", "start:dev"]