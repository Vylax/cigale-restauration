#!/bin/bash

# Colors for better output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting deployment process for Cigale Restauration...${NC}"

# Stop and remove existing container if it exists
if [ "$(docker ps -a -q -f name=cigale-app)" ]; then
    echo -e "${YELLOW}Stopping and removing existing container...${NC}"
    docker stop cigale-app
    docker rm cigale-app
fi

# Build the image
echo -e "${YELLOW}Building Docker image...${NC}"
docker build -t cigale-restauration .

# Check if build was successful
if [ $? -ne 0 ]; then
    echo -e "${RED}Build failed. Please check the errors above.${NC}"
    exit 1
fi

# Run the container
echo -e "${YELLOW}Starting container...${NC}"
docker run -d -p 3001:3001 --name cigale-app cigale-restauration

# Check if container is running
echo -e "${YELLOW}Checking container status...${NC}"
if [ "$(docker ps -q -f name=cigale-app)" ]; then
    echo -e "${GREEN}Container is running!${NC}"
    echo -e "Your application should be running at ${GREEN}http://$(hostname -I | awk '{print $1}'):3001${NC}"
    echo -e "To view logs: ${YELLOW}docker logs -f cigale-app${NC}"
    echo -e "To stop the container: ${YELLOW}docker stop cigale-app${NC}"
    echo -e "To start the container again: ${YELLOW}docker start cigale-app${NC}"
else
    echo -e "${RED}Container failed to start. Check logs with: docker logs cigale-app${NC}"
fi 