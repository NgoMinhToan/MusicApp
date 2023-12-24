// Require the cloudinary library
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

// Return "https" URLs by setting secure: true
//TODO: Hide this
cloudinary.config({
    secure: process.env.SECURE === 'true',
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    cloud_name: process.env.CLOUD_NAME,
});

// Log the configuration
console.log(cloudinary.config());


/////////////////////////
// Uploads an image file
/////////////////////////
const uploadAudio = async (filePath) => {

    // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions
    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
        resource_type: 'auto',
    };

    try {
        // Upload the image
        const result = await cloudinary.uploader.upload(filePath, options);
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
};


module.exports = 
(async (filePath) => {

    // Upload the audio
    const result = await uploadAudio(filePath);

    return result;

});
