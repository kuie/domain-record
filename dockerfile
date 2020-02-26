FROM node:10.16.3-alpine
WORKDIR /app
EXPOSE 59178
COPY ["./", "/app/"]
CMD ["npm ${mode}"]
CMD ["sh", "-c", "node /app/server/server.js"]
