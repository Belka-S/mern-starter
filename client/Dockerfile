# Create image based on the official Node image from dockerhub
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy dependency definitions
COPY package.json .
COPY package-lock.json .

# Install dependecies
# RUN npm i --silent
RUN npm ci

# Get all the code needed to run the app
COPY . .

# Expose the port the app runs in
EXPOSE ${VITE_FRONT_PORT}

# Serve the app
CMD ["npm", "start"]