# Description

## 29/02/24

In the [app.js](../../app.js) file, the following was done:

- The express-async-errors package was imported which helped to monitor, accept
  and work with errors in our application
- The path module,cors, express, swagger-ui-express module for documentation
  were all imported
- I also imported some custom module such as the error handler middlewares,
  admin and user router, swagger documentation.
- The express method was called or initialized and declared to to app variable
- With full access the all the properties in the express method, I set the view
  engine to Ejs. This tells Node.js to use Ejs as the template engine.
- The location where all the Ejs files were located was also set.
- The cors method was initialized as a middleware in the application and also
  express.json() was passed into the app.use() method to parse any json object
  coming from the client
- The path to where the public folder which contains all the client side
  javascript code and css styling was statically served with express.
- The routes to the documentation and application was passed into the app.use()
  method.
- The application was exported so that it could be used in the
  [index.js](../../index.js) file
