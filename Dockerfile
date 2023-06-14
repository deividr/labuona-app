FROM node:18-slim

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

RUN npm install -g pnpm

COPY . .

CMD [ ".docker/start.sh" ]