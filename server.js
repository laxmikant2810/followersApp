
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist'));

app.all('*', (req, res) => {
  res.status(200).sendFile(__dirname + '/dist/index.html');
});

// app.get('/followers', function(req, res)
// {
//   res.write('followers page');
//   res.end();
// });

app.listen(process.env.PORT || 8080);