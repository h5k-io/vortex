FROM quay.io/sdase/node-development:12 AS build
USER root
RUN mkdir --mode 0777 /app
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM quay.io/sdase/nginx:1
USER root
COPY --from=build /app/dist/ /usr/share/nginx/html/
USER 1001
ENV VUE_APP_GRAPHQL_HTTP=http://localhost:4000/graphql
ENV VUE_APP_GRAPHQL_WS=ws://localhost:4000/graphql
