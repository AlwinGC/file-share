# Flie Share
File Share application, Users can upload a file and it creates a random URL which they can share. It will allow anyone with this URL to download the uploaded file. No need to Sign Up, easy free file sharing service.

## Get Started

File Share is a Docker application. To run the app please follow the following commands

    # Builds the docker image
    docker build .
    
    # Start the docker container with builded image
    docker-compose up

## Services Running

- Frontend - Running on port 3000. Makes request to APIs avaialble from backend service

- Backend - Running on port 8080. Provides all API services to React.

- DB - Runs the monog DB server, which is used to store data and files


The File share app can then be accessed on http://localhost:3000/