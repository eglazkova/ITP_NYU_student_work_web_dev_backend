const express = require('express');
const app = express();
const mongoose = require('mongoose');
const MONGODB_URI = config.MONGODB_URI;
const config = require('./config');
//const PORT = config.PORT;
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');
//Middlewares
//app.use('/posts', () => {
//console.log('This is a middleware running!')
//});

// Import Routes
const postsRoute = require('./routes/posts');
app.use(bodyParser.json());
app.use('/posts', postsRoute);
app.use(cors());


//ROUTES
app.get('/', (req, res) => {
    res.send('We are home!');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts!');
});

//Connect To DB
mongoose.connect( MONGODB_URI, {
useNewUrlParser:true,
useUnifiedTopology:true
//console.log('connected to DB!')

});
        
    





app.listen(3000);

