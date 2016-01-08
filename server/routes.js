var express = require('express');
var router = express.Router();
var config = require('./config');
var request = require('request');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

router.get('/champions', function(req, res) {

  request(config.ALL_CHAMPION_DATA() + config.RIOT_API_KEY, function(error, response, body) {
    console.log('GET to /champions returned', response.statusCode, response.statusMessage);
    if (error) {
      throw error;
    }
    if (!error && response.statusCode == 200) {
      var championData = JSON.parse(body);
      res.send(championData.data);
    }
  });

});

router.post('/profile', jsonParser, function(req, res) {

  request(config.GET_SUMMONER_ID(req.body.name) + config.RIOT_API_KEY, function(error, response, body) {
    console.log('POST to /profile returned', response.statusCode, response.statusMessage);
    if (error) {
      throw error;
    }
    if (!error && response.statusCode == 200) {
      var summonerID = JSON.parse(body)[req.body.name].id;
      console.log('summonerID: ' + summonerID);

      request(config.GET_SUMMONER_STATS_UNRANKED(summonerID) + config.RIOT_API_KEY, function(error, response, body) {
        console.log('sending summonerID to get summoner stats');
        if (error) {
          throw error;
        }
        if (!error && response.statusCode == 200) {
          var summonerStats = JSON.parse(body);
          console.log(summonerStats.playerStatSummaries);
          res.send(summonerStats.playerStatSummaries);
        }
      });

    }

  });

});


module.exports = router;
