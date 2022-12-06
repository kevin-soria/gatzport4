FROM node:latest
WORKDIR /app
COPY . .
RUN npm i --legacy-peer-deps
# RUN export NODE_OPTIONS=--openssl-legacy-provider
# CMD ["export", "NODE_OPTIONS=--openssl-legacy-provider"]
ENV NODE_OPTIONS="--openssl-legacy-provider"
EXPOSE 8000
# CMD [ "npm", "run", "build"]
CMD [ "npm", "run", "dev", "--legacy-peer-deps" ]