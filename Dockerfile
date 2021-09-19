FROM node:16.6.0

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3000


CMD [ "npm", "run" ,"start" ] 
#NOTE: Due to system restrictions, i am not able to build the docker image  if you can do that for me feel free to open a pr [ publishing will be done on my behalf]