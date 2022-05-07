FROM debian:bullseye-slim

WORKDIR /app

# Update Debian repo links
RUN apt-get update && \
    apt-get install -y wget gnupg curl && \
    apt-get clean

# Install Monog DB server on Debian
RUN wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | apt-key add - && \
    echo "deb http://repo.mongodb.org/apt/debian buster/mongodb-org/5.0 main" | tee /etc/apt/sources.list.d/mongodb-org-5.0.list && \
    apt-get update && \
    apt-get install -y mongodb-org

# Install NodeJS on Debian
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - && \
    apt-get install -y nodejs

# Copy the front-end fodler to the image \
COPY ./ui .

# Install Node Modules for the app
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
