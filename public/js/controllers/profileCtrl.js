app.controller('profileCtrl', function($scope, profileFct) {

  $scope.submitSummoner = function() {
    var name = $scope.summonerName;
    if (name) {
      profileFct.submitSummoner(name).then(function(data) {
        $scope.stats = [];
        for (var i = 0; i < data.data.length; i++) {
          // console.log(data.data[i].playerStatSummaryType);
          if (data.data[i].playerStatSummaryType === 'Unranked' || data.data[i].playerStatSummaryType === 'Unranked3x3' || data.data[i].playerStatSummaryType === 'RankedSolo5x5' || data.data[i].playerStatSummaryType === 'CoopVsAI' || data.data[i].playerStatSummaryType === 'CAP5x5' || data.data[i].playerStatSummaryType === 'RankedTeam5x5' || data.data[i].playerStatSummaryType === 'RankedTeam3x3') {
            if (Object.keys(data.data[i].aggregatedStats).length > 0) {
              $scope.stats.push(data.data[i]);
            }
          }
        }
      });
    } else {
      alert('Sorry, you didn\'t enter a Summoner name.');
    }
  };
});
