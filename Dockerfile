# Set the base image to create the image for the React app
FROM node:14-alpine

# Create a user with permissions to run the app
RUN addgroup app && adduser -S -G app app

# Set the user to run the app
USER app

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of the files to the working directory
COPY . .

# Expose port 5173 to tell Docker that the container listens on the specified network ports at runtime
EXPOSE 3000

# Command to run the app
CMD npm start
