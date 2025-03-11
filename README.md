# Cigale Restauration

This is a Next.js application for Cigale Restauration.

## Development

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment on OVH VPS (Ubuntu) using Docker

### Prerequisites

- SSH access to your OVH VPS running Ubuntu
- Docker and Docker Compose installed on your VPS
- Git installed on your VPS

### Installation Steps

1. Connect to your VPS via SSH:
   ```bash
   ssh user@your-vps-ip
   ```

2. Install Docker and Docker Compose on Ubuntu if not already installed:
   ```bash
   # Update package lists
   sudo apt update

   # Install required packages
   sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

   # Add Docker's official GPG key
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

   # Add Docker repository
   sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

   # Update package lists again
   sudo apt update

   # Install Docker
   sudo apt install -y docker-ce docker-ce-cli containerd.io

   # Install Docker Compose
   sudo curl -L "https://github.com/docker/compose/releases/download/v2.18.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
   sudo chmod +x /usr/local/bin/docker-compose

   # Start Docker and enable it to start on boot
   sudo systemctl start docker
   sudo systemctl enable docker

   # Add your user to the docker group to run docker without sudo
   sudo usermod -aG docker $USER
   
   # Apply the new group membership (or you can log out and log back in)
   newgrp docker
   ```

3. Clone your repository:
   ```bash
   git clone https://your-repository-url.git
   cd your-repository-directory
   ```

4. Deploy the application:
   ```bash
   # Make the deployment script executable
   chmod +x deploy.sh
   
   # Run the deployment script
   ./deploy.sh
   ```

5. Your application should now be running at `http://your-vps-ip:3001`

### Managing Your Deployment

- View logs:
  ```bash
  docker-compose logs -f app
  ```

- Stop the application:
  ```bash
  docker-compose down
  ```

- Restart the application:
  ```bash
  docker-compose restart
  ```

- Update the application:
  ```bash
  git pull
  docker-compose up -d --build
  ```

### Setting Up a Domain Name and HTTPS

For production use, you should set up a domain name and HTTPS. You can use Nginx as a reverse proxy with Let's Encrypt for SSL certificates.

1. Install Nginx and Certbot on Ubuntu:
   ```bash
   sudo apt install -y nginx certbot python3-certbot-nginx
   ```

2. Create an Nginx configuration file for your domain:
   ```bash
   sudo nano /etc/nginx/sites-available/your-domain.com
   ```

3. Add the following configuration:
   ```nginx
   server {
       listen 80;
       server_name your-domain.com www.your-domain.com;

       location / {
           proxy_pass http://localhost:3001;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. Enable the site and get SSL certificates:
   ```bash
   sudo ln -s /etc/nginx/sites-available/your-domain.com /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

5. Your application should now be accessible at `https://your-domain.com`
