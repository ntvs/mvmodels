# mvmodels
NPM package that provides mongoose schemas for services dealing with storing video/file-sharing metadata in MongoDB.

# Installing with NPM
To use this package, you should have the latest version of Mongoose installed. To install, execute the following:
```
npm i mongoose
```

Then, install this package using NPM by running:
```
npm i @ntvs/mvmodels
```

# How to use
First, include Mongoose and setup the following boilerplate code (if you have not already):
```javascript
//Mongoose
const mongoose = require("mongoose");

//Mongoose establish connection
mongoose.connect("mongodb://127.0.0.1:27017"); //Your database URL
const db = mongoose.connection;

//Mongoose connection event listeners
db.on("error", (e) => {
    console.log(e);
    console.log(`Please check if your URL is correct.\n`);
});
db.once("open", () => {
    console.log(`MongoDB connection established successfully.\n`);
});
```

Then, require the package in your node project:
```javascript
const mvmodels = require('mvmodels');
```

# Registering schemas
To use the schemas in this package, they must first be registered with your local Mongoose instance.
This package provides a helper function which registers all included schemas for you and creates models. The function accepts the local Mongoose instance as its only argument.
```javascript
mvmodels.registerSchemas(mongoose);
```

# Using registered models
To instantiate Mongoose objects of the newly created models, use:
```javascript
let newVideoFile = new mongoose.model("VideoFile")(/*properties object*/);
```

To get a list of all the available schemas, use:
```javascript
console.log(mvmodels.getAllSchemaNames());
```

# Additional functions & properties
## Functions
### getAllSchemas()
Same as `getAllSchemaNames()` but returns the actual Mongoose schema objects in an array.

## Properties
### mvmodels.schemas
Returns an array of objects containing all available schemas in the form:
```javascript
[
    {"name": "VideoFile", "schema": VideoFile},
    ...
]
```
