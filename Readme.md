# Monorepo Project - Backend API

A simple backend application built with **Express.js** and **MongoDB** for managing user details, containerized using Docker and Docker Compose.

## 🚀 Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB (using Bitnami image)
- **Containerization**: Docker & Docker Compose

## 📁 Project Structure

```
monorepo-project/

├── src/
│   ├── db.ts              # MongoDB connection
│   └── index.ts           # Express server & routes
├── docker-compose.yml      # Development environment
├── docker-compose.prod.yml # Production environment
├── Dockerfile             # Node.js application container
└── README.md
```

## 🛠️ Prerequisites

Before running this project, make sure you have the following installed:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/)

## 🚀 Quick Start

### Clone the Repository
```bash
git clone https://github.com/vishal-sahu12/Docker-compose
cd Monorepo Project
```

### Option 1: Using Docker Compose (Recommended)

#### Production Environment
```bash
# Start production environment
docker-compose -f docker-compose.prod.yml up

# Build and start with latest changes
docker-compose -f docker-compose.prod.yml up --build
```

### Option 2: Manual Docker Setup

If you prefer to run containers manually:

#### Step 1: Create Docker Network
```bash
docker network create node_network
```

#### Step 2: Start MongoDB Container
```bash
docker run -d \
  -p 27017:27017 \
  --name mongoContainer \
  --network node_network \
  bitnami/mongodb
```

#### Step 3: Build Application Image
```bash
docker build -t iotlab6sem/learning_compose .
```

#### Step 4: Start Application Container
```bash
docker run \
  -p 3000:3000 \
  --name nodeContainer \
  --network node_network \
  learning
```

## 🔧 Available Services

| Service | Port | Description |
|---------|------|-------------|
| **Backend API** | 3000 | Express.js server with user routes |
| **MongoDB** | 27017 | Database server |

## 🌐 Access the Application

Once the containers are running, you can access:

- **User API**: http://localhost:3000 (Get user details)
- **MongoDB**: mongodb://localhost:27017

## 📋 Useful Commands

### Docker Compose Commands
```bash
# Start services
docker-compose up

# Stop services
docker-compose down

# View running containers
docker-compose ps

# View logs for specific service
docker-compose logs nodeService
docker-compose logs mongoService

# Rebuild and start
docker-compose up --build

# Run services in background
docker-compose up -d
```

### Docker Commands
```bash
# List running containers
docker ps

# View container logs
docker logs nodeContainer
docker logs mongoContainer

# Execute commands inside container
docker exec -it nodeContainer bash
docker exec -it mongoContainer bash

# Stop and remove containers
docker stop nodeContainer mongoContainer
docker rm nodeContainer mongoContainer

# Remove network
docker network rm node_network
```

## 🔍 Troubleshooting

### Common Issues

**Container exits immediately:**
```bash
# Check container logs
docker-compose logs nodeService
```

**Port already in use:**
```bash
# Check what's using the port
netstat -ano | findstr :3000  # Windows
lsof -i :3000                 # macOS/Linux

# Use different port in docker-compose.yml
ports:
  - "3001:3000"
```

**Database connection issues:**
```bash
# Ensure MongoDB is running
docker-compose logs mongoService

# Check network connectivity
docker network ls
docker network inspect monorepo-project_default
```


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request





**Happy Coding!** 🎉




