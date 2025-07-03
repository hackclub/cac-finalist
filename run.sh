#!/bin/bash

echo "🔄 Stopping and removing existing containers..."

# Stop all containers using the cac-finalist image
RUNNING_CONTAINERS=$(docker ps -q --filter ancestor=cac-finalist)
if [ ! -z "$RUNNING_CONTAINERS" ]; then
    echo "Stopping running containers: $RUNNING_CONTAINERS"
    docker stop $RUNNING_CONTAINERS
fi

# Remove all containers (running and stopped) using the cac-finalist image
ALL_CONTAINERS=$(docker ps -aq --filter ancestor=cac-finalist)
if [ ! -z "$ALL_CONTAINERS" ]; then
    echo "Removing containers: $ALL_CONTAINERS"
    docker rm $ALL_CONTAINERS
fi

# Also remove any containers named cac-test specifically
if [ $(docker ps -aq --filter name=cac-test | wc -l) -gt 0 ]; then
    echo "Removing cac-test container..."
    docker rm -f cac-test 2>/dev/null || true
fi

echo "🏗️  Building Docker image..."
docker build -t cac-finalist .

if [ $? -ne 0 ]; then
    echo "❌ Docker build failed!"
    exit 1
fi

echo "🚀 Starting new container..."
docker run -d -p 3000:3000 --name cac-test cac-finalist

if [ $? -eq 0 ]; then
    echo "✅ Container started successfully!"
    echo "🌐 App is running at: http://localhost:3000"
    echo "📋 View logs with: docker logs cac-test"
    echo "🛑 Stop with: docker stop cac-test"
else
    echo "❌ Failed to start container!"
    exit 1
fi 