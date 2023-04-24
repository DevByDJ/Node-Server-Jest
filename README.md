# Node-Server-Jest

> Register Page (prototype)
![Register](https://user-images.githubusercontent.com/89165878/233884751-d5a16b74-6eb2-4109-b9dc-fb15622c8a62.gif)
> Login Page
![Login](https://user-images.githubusercontent.com/89165878/233884759-ba34d742-8496-4402-a6d0-cc07cd972376.gif)
> Dashboard
![dashboard](https://user-images.githubusercontent.com/89165878/233885508-2b67e8dd-e986-45bb-b4c0-69e6e15b7322.gif)
 
## Login Application

This application is a simple login system built using Node.js and Express.js. It allows users to register and login, and once logged in, they are taken to a dashboard.

The application uses MongoDB as its database to store registered users. It is built using the following scripts:

## Scripts

### `start`

```
"start": "nodemon server.js"
```


This script starts the server using `nodemon`. `nodemon` is a utility that monitors for any changes in your source and automatically restarts the server.

### `test`

```
"test": "jest --forceExit --detectOpenHandles --watchAll --maxWorkers=1"
```


This script runs the test suite for the application using `jest`. `jest` is a testing framework for JavaScript. The `--forceExit` flag is used to force Jest to exit after all tests have completed. The `--detectOpenHandles` flag is used to exit the process with an error code if the process has active handles that are preventing it from exiting. The `--watchAll` flag is used to run the test suite in watch mode, and the `--maxWorkers` flag is used to specify the maximum number of workers the worker-pool should spawn for running tests.

## Installation

To install and run this application on your workstation, follow the steps below:

1. Make sure you have [Node.js](https://nodejs.org) and [MongoDB](https://www.mongodb.com) installed on your machine.

2. Clone the repository to your local machine:

git clone https://github.com/DevByDJ/Node-Server-Jest.git

3. Navigate to the project directory:

```
cd Node-Server-Jest
```


4. Install the dependencies:
```
npm install
```

5. Create a file named `.env` in the root of the project and set the following environment variables:
```
PORT=3000
MONGODB_URI=mongodb://localhost/Node-Server-Jest
```

6. Start the server:
```
npm start
```


7. Open a web browser and navigate to `http://localhost:3000` to access the application.

## Testing

To run the test suite for this application, use the following command:

```
npm test
```

