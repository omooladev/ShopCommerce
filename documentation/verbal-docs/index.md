# Description

## 29/02/24

The [index.js](../../index.js) file served as the entry point for this
application and the following was done:

- The dotenv package used to load environment variables from a .env file was
  imported and attached to it was config() method used to parse the key-value
  pairs in the .env file and loads it into process.env where it can be easily
  accessed from the application.
- The [app.js](../../app.js) file was imported
- The PORT number and MONGO URI which serves as a connection string to the
  ShopCommerce database on mongodb was extracted from the process.env global
  object that contains information about the environment in which the Node.js
  application is currently running.By default we assigned a custom 5000 as the
  port number for local host of the Node.js application
- An asynchronous function called start was created and in this function we
  connected to the database and listened to the server by passing in the PORT
  number
