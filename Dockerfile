# Stage 1: Build the React application
# This stage uses a Node.js image to build the app.
FROM node:18.19.0-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
# We use 'npm ci' for clean and consistent builds.
COPY package.json .
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the app for production
# This creates the optimized 'dist' folder.
RUN npm run build

# Stage 2: Serve the static files
# This stage uses a lightweight Nginx image to serve the built files.
FROM nginx:alpine

# Copy the built files from the 'builder' stage to the Nginx web root
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# The Nginx server starts automatically
CMD ["nginx", "-g", "daemon off;"]