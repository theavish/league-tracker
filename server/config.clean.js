module.exports = {


  RIOT_API_KEY: '<YOUR-API-KEY>',

  //       In development:
  // 10 requests every 10 seconds
  // 500 requests every 10 minutes

  SECRET: '<YOUR-SECRET>',

  ALL_CHAMPION_DATA: function() {
    return 'https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=all&api_key=';
  },

  GET_SUMMONER_ID: function(name) {
    return 'https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/' + name + '?api_key=';
  },

  GET_SUMMONER_STATS_UNRANKED: function(id) {
    return 'https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/' + id + '/summary?season=SEASON2015&api_key=';
  },

  GET_SUMMONER_STATS_RANKED: function(id) {
    return 'https://na.api.pvp.net/api/lol/na/v1.3/stats/by-summoner/' + id + '/ranked?season=SEASON2015&api_key=';
  },

};
