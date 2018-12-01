const express = require('express');
const path = require('path');
const proxy = require('express-http-proxy');
// const apiProxy = proxy.createProxyServer();
// const serverChart = 'http://localhost:3001';
// const serverVolume = 'http://localhost:3002';
// const serverBuy = 'http://localhost:3003';
// const serverAlso = 'http://ec2-100-27-29-91.compute-1.amazonaws.com:3006/';


const app = express();

app.use('/stock/:id', express.static(path.join(__dirname, './public')));
app.get('/api/:id/alsobought', proxy('http://ec2-100-27-29-91.compute-1.amazonaws.com:3006/'))

const port = 3000;

// app.use('/', proxy('http://localhost:3001/api/symbol/0/day'));
// app.use('/', proxy('http://localhost:3002/api/volumes/symbols/2'));
// app.use('/', proxy('http://localhost:3007/api'));
// app.use('/', proxy('http://localhost:3003/api'))

// app.all("/api/symbol/0/day", function(req, res) {
//   console.log('redirecting to ServerChart');
//   apiProxy.web(req, res, {target: serverChart});
// });

// app.all("/api/volumes/symbols/2", function(req, res) {
//   console.log('redirecting to ServerVolume');
//   apiProxy.web(req, res, {target: serverVolume});
// });

// app.all("/api/buytest", function(req, res) {
//   console.log('redirecting to ServerBuy');
//   apiProxy.web(req, res, {target: serverBuy});
// });


// app.all(`/api/:id/alsobought`, function(req, res) {
//   console.log('redirecting to ServerAlso');
//   apiProxy.web(req, res, {target: serverAlso});
// });


app.listen(port, () => console.log('Server listening on port ' + port));


