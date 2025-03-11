#!/bin/bash

# Make this script executable with: chmod +x ubuntu-deploy.sh

# Colors for better output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Starting deployment process for Cigale Restauration on Ubuntu...${NC}"

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${RED}Docker is not installed. Please install Docker first.${NC}"
    echo "You can install Docker with the following commands:"
    echo "sudo apt update"
    echo "sudo apt install -y apt-transport-https ca-certificates curl software-properties-common"
    echo "curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -"
    echo "sudo add-apt-repository \"deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable\""
    echo "sudo apt update"
    echo "sudo apt install -y docker-ce docker-ce-cli containerd.io"
    echo "sudo systemctl start docker"
    echo "sudo systemctl enable docker"
    echo "sudo usermod -aG docker $USER"
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo -e "${RED}Docker Compose is not installed. Please install Docker Compose first.${NC}"
    echo "You can install Docker Compose with the following commands:"
    echo "sudo curl -L \"https://github.com/docker/compose/releases/download/v2.18.1/docker-compose-$(uname -s)-$(uname -m)\" -o /usr/local/bin/docker-compose"
    echo "sudo chmod +x /usr/local/bin/docker-compose"
    exit 1
fi

# Check if port 3001 is already in use
if netstat -tuln | grep -q ":3001 "; then
    echo -e "${RED}Port 3001 is already in use. Please modify the port in Dockerfile and docker-compose.yml.${NC}"
    exit 1
fi

# Pull latest changes if it's a git repository
if [ -d .git ]; then
    echo -e "${YELLOW}Pulling latest changes from git repository...${NC}"
    git pull
fi

# Build and start the Docker containers
echo -e "${YELLOW}Building and starting Docker containers...${NC}"
docker-compose up -d --build

# Check if containers are running
echo -e "${YELLOW}Checking container status...${NC}"
docker-compose ps

# Check if the application is accessible
echo -e "${YELLOW}Checking if the application is accessible...${NC}"
sleep 5
if curl -s http://localhost:3001 > /dev/null; then
    echo -e "${GREEN}Application is running and accessible at http://localhost:3001${NC}"
else
    echo -e "${RED}Application is not accessible. Please check the logs with: docker-compose logs -f app${NC}"
fi

echo -e "${GREEN}Deployment completed!${NC}"
echo -e "Your application should be running at ${GREEN}http://$(hostname -I | awk '{print $1}'):3001${NC}"
echo -e "To view logs: ${YELLOW}docker-compose logs -f app${NC}"
echo -e "To stop the application: ${YELLOW}docker-compose down${NC}"

# Provide information about setting up Nginx
echo -e "\n${YELLOW}Next steps:${NC}"
echo -e "1. Set up Nginx as a reverse proxy (if you haven't already):"
echo -e "   ${YELLOW}sudo apt install -y nginx${NC}"
echo -e "   ${YELLOW}sudo cp nginx.conf /etc/nginx/sites-available/your-domain.com${NC}"
echo -e "   ${YELLOW}sudo ln -s /etc/nginx/sites-available/your-domain.com /etc/nginx/sites-enabled/${NC}"
echo -e "   ${YELLOW}sudo nginx -t${NC}"
echo -e "   ${YELLOW}sudo systemctl reload nginx${NC}"

echo -e "2. Set up SSL with Let's Encrypt (optional):"
echo -e "   ${YELLOW}sudo apt install -y certbot python3-certbot-nginx${NC}"
echo -e "   ${YELLOW}sudo certbot --nginx -d your-domain.com -d www.your-domain.com${NC}" 