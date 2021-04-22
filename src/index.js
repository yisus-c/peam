const express = require('express');
const { join } = require('path');
const app = express();
const path = require('path');

//configuraciones 
app.set('port', 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); 

//routes 
const indexRouts = require('./routes/');
app.use(indexRouts);

//Arcivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

//ejecutando servidor
app.listen(app.get('port'), () =>{
    console.log('Server on port', app.get('port'));
});

