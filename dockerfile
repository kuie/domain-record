FROM node:10.16.3-alpine
ARG mode=client
WORKDIR /app
EXPOSE 59178
COPY ["./", "/app/"]
CMD ["npm ${mode}"]
CMD ["sh", "-c", "node /app/server/server.js"]
