FROM node:lts-alpine

WORKDIR /car_sharing

COPY package.json .

RUN npm install

COPY . .