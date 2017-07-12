const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
app = express();

// direct requests to the public directory
app.use( express.static( __dirname + '/public' ) );
// set up template
app.set( 'view engine', 'ejs' );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
  extended: false
} ) );


app.get('/', (req, res) => {
	res.render('index')
})
const port = process.env.PORT || 3003
app.listen(port, () =>{
	console.log('server is up and running on port:', port)
})