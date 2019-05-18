const express = require('express'),
    http = require('http'),
    path = require('path');

    const app = express();
    
    // API
    // const allRoute = require('./api/routes/all.route');
    // app.use('/all', allRoute);g

    // UI
    app.use(express.static(path.join(__dirname, 'dist/rebi-gabi')))
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, 'dist/rebi-gabi/index.html'));
    });

    // configure server
    let port = process.env.PORT || 3001;
    const server = http.createServer(app);
    server.listen(port, () => {
        console.log('Listening on port ' + port);
    });