const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
// var bodyParser=require('path');
var helmet=require('helmet');
const app = express();
const port=process.env.PORT || 3000;

app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// const buf =Buffer.from('just checking');


app.use('/', require(path.join(__dirname, 'routes/blog.js')));
app.use(express.static(path.join(__dirname,'/')));
app.use(helmet());

// console.log(data_todo_send);

app.listen(port, () => {
    console.log(`App listening to http://localhost:${port}`);
})

// module.exports=app;
