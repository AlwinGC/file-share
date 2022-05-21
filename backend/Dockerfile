FROM node:current-bullseye-slim

WORKDIR /app

RUN addgroup app && adduser --system --ingroup app app

# Copy the front-end fodler to the image \
COPY . .

# Install Node Modules for the app
RUN npm install

EXPOSE 8080

CMD ["npm", "start"]
