const express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const morgan = require('morgan');
const app = express();

const cort = require('cors');

const {mongoose} = require('./database');

const bodyParser = require('body-parser'); 
 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 


app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cort({origin:"*"}))
app.use('/tecnico', require('./routes/tecnico.routes'));
app.use('/yesavage', require('./routes/yesavage.routes'));
app.use('/formulario', require('./routes/formulario'));
app.use('/adulto', require('./routes/adulto.routes'));
app.use('/TestBarthel', require('./routes/Barthel'));
app.use('/TestLawton', require('./routes/Lawton'));
app.use('/Minimental', require('./routes/Minimental'));
app.use('/supervisor', require('./routes/supervisor.routes.js'));

app.listen(app.get('port'), () => {
  console.log('Server started on port ' + app.get('port'));
});
