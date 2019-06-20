var express = require('express');
var app = express();
app.use(express.static('assets'));

app.get('/', function (req, res) {
	//u mnie z automatu serwuje plik index.html bo udostepnia folder assets. 
	//nie da sie w takim razie zdefiniowac defaulowego zachowania dla ogólnego adresu, jedyna opcja to zmienić nazwe index.html na inną?
	res.send('Hello world');
	//res.sendFile('/index.html')
});

app.get('/userform', function (req, res) {
	const response = {
		first_name: req.query.first_name,
		last_name: req.query.last_name
	};
	res.json(response);
});


var server = app.listen(3000, 'localhost', function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Przykładowa aplikacja nasłuchuje na http://' + host + ':' + port);
});