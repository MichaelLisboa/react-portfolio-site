const express = require('express');
const yes = require('yes-https');
const app = express();
const path = require('path');

//Static file declaration
app.use(yes());
app.use(express.static(path.join(__dirname, 'build')));

//production mode
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'build')));
    app.get('*', (req, res) => {
        res.sendfile(path.join(__dirname = 'build/index.html'));
    })
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
})

const server = app.listen(process.env.PORT || 5000, () => {
    console.log('App listening on port %s', server.address().port);
    console.log('Press Ctrl+C to quit.');
});
