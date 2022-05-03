FROM node:16-alpine

WORKDIR /usr/src/server
COPY . /usr/src/server/

RUN npm install && npm run dev:prepare && npm run build && \
  npm run dev:build && npm prune --production && rm -rf src playground/pages playground/nuxt.config.ts

EXPOSE 3000
ENTRYPOINT [ "node", "playground/.output/server/index.mjs" ]