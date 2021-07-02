FROM node:14.17.1

MAINTAINER Shubham Alchetti

RUN apt-get update

WORKDIR /app

COPY . /app

EXPOSE 9005

CMD ["node","index.js"]
