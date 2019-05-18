const express = require('express'),
    path = require('path');

    const allRoute = require('./api/routes/all.route');

    const app = express();
    let port = process.env.PORT || 3001;
    
    // API
    // app.use('/all', allRoute);

    // UI
    app.use(express.static(path.join(__dirname, 'dist')))

    app.get('/', (req, res) => res.render('dist/index.html'));

    app.set('port', port);
    const server = app.listen(function(){
        console.log('Listening on port ' + port);
    });