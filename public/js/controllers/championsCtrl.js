app.controller('championsCtrl', function($scope, championsFct) {

  $scope.getAllChampions = function() {
    championsFct.getAllChampions().then(function(data) {
      $scope.champions = [];
      for (var key in data.data) {
        $scope.champions.push(data.data[key]);
      }
    });
  };

});
