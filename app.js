const {getCalData}=require('./mockData/vuecalendarData.js')
var express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  port = process.env.PORT || 5001;

// enable CORS without external module
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// request handlers
app.get('/getCalendarData', (req, res) => {
  let dt=getCalData()
  res.status(200).json(dt);
    // res.send({
    //   data: getCalData()
    // })
});

app.listen(port, () => {
  console.log('Server started on: ' + port);
});
