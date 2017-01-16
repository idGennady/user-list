var path = require('path');

module.exports = function routers(app){

    app.get('/api/users', function(req, res) {
        if(!path.join(__dirname, './data/users.json')){
            res.send(404);
        }
        res.sendFile(path.join(__dirname, './data/users.json'))
    });

    app.get('/styles.css', function(req, res) {
        res.sendFile(path.join(__dirname, '../styles.css'));
    });

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../index.html'));
    });
};