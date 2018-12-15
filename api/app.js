
const express = require('express')
const app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  res.status(200).json([
    {
      id: 1,
      name: 'TODO 1',
      checked: false,
    },{
      name: 'TODO 2',
      checked: true,
    },{
      name: 'TODO 3',
      checked: true,
    },{
      name: 'TODO 4',
      checked: false,
    }
  ]);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})