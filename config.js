require('dotenv').config();
module.exports = {
    PORT: process.env.PORT || 3000,//database has a url, service that leaves in the internet
    MONGODB_URI: process.env.MONGODB_URI || '' /// we need to have this url define

}