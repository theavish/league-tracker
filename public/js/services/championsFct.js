app.factory('championsFct', function($http, SERVER) {

  var getAllChampions = function() {
    console.log('getting champions...');
    return $http.get(SERVER + 'champions')
      .then(function successCb(response) {
        console.log('success:', response);
        return response;
      }, function errorCb(response) {
        console.log('error:', response);
        return 'There was an error retrieving the data.';
      });
  };

  return {
    getAllChampions: getAllChampions
  };

});
