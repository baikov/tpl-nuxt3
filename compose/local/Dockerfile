# Build
FROM node:18-alpine

WORKDIR /nuxt

COPY ./package*.json ./
COPY ./yarn.lock ./

RUN yarn install --non-interactive --production=false

COPY . .

# ENV HOST 0.0.0.0
ENV CHOKIDAR_USEPOLLING=true
# ENV PATH ./node_modules/.bin/:$PATH
