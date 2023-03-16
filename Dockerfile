FROM node:18-slim

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

RUN npm install -g pnpm

COPY . .

RUN pnpm i

CMD [ "pnpm", "run", "dev" ]
