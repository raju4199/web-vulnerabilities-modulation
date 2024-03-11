# Web based Vulnerabilities Modulation

The main objective of this project is to give a clear insight into secure web application development and deployment by simulating various vulnerabilities based on web and network. This project has vulnerabilities simulated across various modules to demonstrate how a hacker is able to penetrate into the network/application and breach the data and break CIA triad.

## Features

- SQL Injection
- Cross Site Scripting
- Command Execution

## Technologies Used

### Frontend

- React
- React Router
- Axios

### Backend

- Node.js
- Express
- MongoDB
- Mongoose

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository
`git clone https://github.com/your-username/web-vulnerabilities-modulation.git`

2. Navigate to the project directory
`cd web-vulnerabilities-modulation`

3. Navigate to the server directory
`cd server`

4. Install server dependencies
`npm install`

5. Navigate to the client directory
`cd client`

6. Install client dependencies
`npm install`

7. Create a `.env` file in the root directory and add the following environment variables:
```
# MongoDB URI
MONGODB_URI=<your_mongodb_uri>

# Port number
PORT=<your_port_number>
```
## Start development servers

### Backend
`npm server.js`

### Frontend
`npm run dev`

## Usage

1. Open the application in your browser at `http://localhost:3000`.
2. Explore the different vulnerabilities by navigating to the respective pages.
3. Follow the instructions on each page to simulate the vulnerability.

