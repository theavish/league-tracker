app.factory('profileFct', function($http, SERVER) {

  var submitSummoner = function(name) {
    console.log('getting profile...');
    
    var parameters = {
      name: name
    };
    
    return $http.post(SERVER + 'profile', parameters)
      .then(function successCb(response) {
        console.log('success:', response);
        return response;
      }, function errorCb(response) {
        console.log('error:', response);
        return null;
      });
  };

  return {
    submitSummoner: submitSummoner
  };

});
