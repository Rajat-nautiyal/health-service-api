# health-service-api

## Requirements
- Node.js
- express.js
- MongoDB
## Description
- health service API having post, get, put and delete service details based on user inputs
## Setup
1. Clone the repository using `git clone https://github.com/Rajat-nautiyal/health-service-api.git` in command prompt
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the server.

## API Endpoints
- POST /services/ - Post a new health service
- GET /services/ - Get all Health services
- PUT /services/:id - Update a Health service using mongodb id of any specific service
- DELETE /services/:id - Delete a Health service using mongodb id of any specific service

## Postman Collection( for testing purpose )
Import the `Api.postman_collection.json` file in `Postman` to test the API.
