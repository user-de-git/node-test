let app = require('express')();

app.get('/', (req,res) => {
    res.send('Home page');
})

app.get('/foo', (req,res) => {
    res.send('foo page');
})

app.listen(3000);