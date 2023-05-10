//Import schemas
const VideoFile = require("./models/videoFile");

//Schema list
const schemas = [
    {"name": "VideoFile", "schema": VideoFile},
];

//Register schemas function to facilitate registering all schemas provided by this package
const registerSchemas = (mongooseInstance) => {
    schemas.forEach(schema => {
        mongooseInstance.model(schema.name, schema.schema);
    });
};

//Function to facilitate getting all schemas directly. Returns an array of schemas.
const getAllSchemas = () => {
    let result = [];

    schemas.forEach(schema => {
        result.push(schema.schema);
    });

    return result;
};

//Export models
module.exports = { registerSchemas, getAllSchemas, schemas };