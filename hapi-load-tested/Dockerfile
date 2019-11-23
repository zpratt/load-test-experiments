FROM node:10.17.0-alpine as builder

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . .

RUN yarn install --production --ignore-optional --ignore-platform
USER node

#######################################

FROM node:10.17.0-alpine
EXPOSE 8080

RUN mkdir -p /usr/src/app && apk --no-cache update && apk --no-cache upgrade --available && sync
WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package.json .
COPY --from=builder /usr/src/app/yarn.lock .
COPY --from=builder /usr/src/app/index.mjs .
COPY --from=builder /usr/src/app/server.js .
COPY --from=builder /usr/src/app/repositories ./repositories
COPY --from=builder /usr/src/app/routes ./routes
COPY --from=builder /usr/src/app/utils ./utils
COPY --from=builder /usr/src/app/node_modules ./node_modules

USER node
ENTRYPOINT ["node", "--experimental-modules", "index.mjs"]
