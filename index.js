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

//Export models
module.exports = { registerSchemas, schemas };