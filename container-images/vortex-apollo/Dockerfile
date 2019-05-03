FROM quay.io/sdase/node-development:12 AS build
USER root
RUN mkdir --mode 0777 /app
USER 1001
WORKDIR /app
COPY package*.json src ./
RUN npm ci --only=production

FROM quay.io/sdase/node-runtime:12
USER root
RUN mkdir --mode 0755 /app
WORKDIR /app
COPY --from=build /app/ ./
USER 1001
ENV PATH=/opt/node/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
ENTRYPOINT [ "/opt/node/bin/npm" ]
CMD [ "start" ]
EXPOSE 4000
