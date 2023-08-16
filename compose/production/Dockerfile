# Build
FROM node:18-alpine as builder

WORKDIR /nuxt

COPY package*.json ./
COPY ./yarn.lock ./

# Only for VPS with < 2GB of RAM
# ENV NODE_OPTIONS=--max-old-space-size=512

RUN yarn install --prefer-offline --pure-lockfile --non-interactive --production=false

COPY . .

RUN yarn build

# Run
FROM node:18-alpine as prod

ENV NODE_ENV production
WORKDIR /nuxt

COPY --from=builder /nuxt/package.json ./package.json
COPY --from=builder /nuxt/yarn.lock ./yarn.lock

COPY --from=builder /nuxt/.output ./.output
