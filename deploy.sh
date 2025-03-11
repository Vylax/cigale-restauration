#!/bin/bash

# Make this script executable with: chmod +x deploy.sh

# Build and start the Docker containers
echo "Building and starting Docker containers..."
docker-compose up -d --build

# Check if containers are running
echo "Checking container status..."
docker-compose ps

echo "Deployment completed!"
echo "Your application should be running at http://your-vps-ip:3001"
echo "To view logs: docker-compose logs -f app"
echo "To stop the application: docker-compose down" 