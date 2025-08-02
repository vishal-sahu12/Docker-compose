Docker Installation Steps
-- Install Docker
-- Create a network docker create network node_network
-- start MongoDB proces
    docker run -d -p 27017:27017 --name mongoContainer --network node_network bitnami/mongodb

-- Build the docker image
    docker build -t learning . 
-- Start the container
    docker run -p 3000:3000 --name nodeContainer --network node_network learning 

-- Verify using the url
    http://localhost:3000/

