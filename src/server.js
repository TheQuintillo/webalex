const express = require('express');
const app = express();
const morgan = require('morgan')
const path = require('path');

//Setting
app.set('port', process.env.PORT || 3000);
//Midleware
app.use(morgan('dev'));
app.use(express.json());
//Router

//Static Files
app.use(express.static(path.join(__dirname, 'public')));
//Starting Server
app.listen(app.get('port'), ()=>{
    console.log(`Server ON en Puerto ${app.get('port')}`);
});