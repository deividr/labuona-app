FROM node:18-alpine

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

CMD [ ".docker/start.sh" ]
