FROM node:10

# Create app directory
WORKDIR /server

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json .

RUN npm install --production

# Bundle app source
COPY . .

EXPOSE 3004

CMD [ "npm", "start" ]
