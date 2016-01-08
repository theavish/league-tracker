app.controller('championsCtrl', function($scope, championsFct) {

  $scope.getAllChampions = function() {
    championsFct.getAllChampions().then(function(data) {
      $scope.champions = [];
      for (var key in data.data) {
        $scope.champions.push(data.data[key]);
      }
      for (var i = 0; i < $scope.champions.length; i++) {
        $scope.champions[i].blurb = $scope.champions[i].lore.slice(0, 150) + '...';
      }
    });
  };

});
