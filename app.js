const express = require('express');

const { engine } = require('express-handlebars');
const path = require('path');
const app = express();
const port=process.env.PORT || 1234;

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use('/', require(path.join(__dirname, 'routes/blog.js')));
// app.use(express.static(path.join(__dirname,'public')));
// app.use(express.static(path.join(__dirname,'database.js')));
app.use(express.static(path.join(__dirname,'/')));
app.listen(port, () => {
    console.log(`App listening to http://localhost:${port}`);
})

