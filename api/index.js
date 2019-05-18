const express = require('express'),
    path = require('path'),
    cors = require('cors');

    const allRoute = require('./routes/all.route');

    const app = express();
    let port = process.env.PORT || 4000;
    
    app.use(bodyParser.json());
    app.use(cors());
    app.use('/all', allRoute);

    const server = app.listen(function(){
        console.log('Listening on port ' + port);
    });