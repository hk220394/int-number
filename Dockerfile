FROM node:11.15.0
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node index.js test21
