FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
#EXPOSE 27017
#RUN mongod --fork --logpath /var/log/mongodb.log --dbpath /data/db && sleep 5
CMD ["npm", "run", "dev"]