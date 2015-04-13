var http = require('http');
var fs = require('fs');
var url = require('url');
var basen = require('./base-n.js');

var server = http.createServer(function(req, res) {



	if (req.url === "/index.html") {

		fs.readFile(__dirname + '/index.html', function (err, data) {
                if (err) return send404(res);
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data, 'utf8');
                res.end();
              });
	} else if (req.url === "/style.css") {	
		fs.readFile(__dirname + '/style.css', function (err, data) {
                if (err) return send404(res);
                res.writeHead(200, {'Content-Type': 'text/javascript'});
                res.write(data, 'utf8');
                res.end();
              });
	} else if (req.url === "/jquery-2.1.3.js") {	
		fs.readFile(__dirname + '/jquery-2.1.3.js', function (err, data) {
                if (err) return send404(res);
                res.writeHead(200, {'Content-Type': 'application/javascript'});
                res.write(data, 'utf8');
                res.end();
              });
	} else if (req.url === "/result.js") {	
		fs.readFile(__dirname + '/result.js', function (err, data) {
                if (err) return send404(res);
                res.writeHead(200, {'Content-Type': 'application/javascript'});
                res.write(data, 'utf8');
                res.end();
              });
	} else {

		var parsedUrl = url.parse(req.url, true, true);
		var sourceChar = parsedUrl.query.sourceChar;
		var targetChar = parsedUrl.query.targetChar;
		var sourceNum = parsedUrl.query.sourceNum;
		var result;

		switch (sourceChar) {
			case "bin": sourceChar = "01"; break;
			case "oct": sourceChar = "01234567"; break;
			case "dec": sourceChar = "0123456789"; break;
			case "hex": sourceChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; break;
			default: sourceChar = "";
		}
		switch (targetChar) {
			case "bin": sourceChar = "01"; break;
			case "oct": sourceChar = "01234567"; break;
			case "dec": sourceChar = "0123456789"; break;
			case "hex": sourceChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"; break;
			default: sourceChar = "";
		}

		if (sourceChar !== undefined && targetChar !== undefined && sourceNum !== undefined && sourceChar.length !== 0 && targetChar.length !== 0 && sourceNum.length !== 0) {
			try {
				result = basen.baseToBase(sourceChar,targetChar, sourceNum);
			}
			catch (result) {
				console.log('It seems something went wrong! Please check all your characters.', result);
			}
		}
		if (result !== undefined && result.length !== 0) {
			res.write(result + "");
			res.end();
		} else {
			res.statusCode = 400;
			res.end('error');
		}
	}	
});
server.listen(8082);
console.log("Server running at http://127.0.0.1:8082/");
