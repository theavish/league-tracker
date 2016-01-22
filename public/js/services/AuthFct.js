app.factory('AuthFct', ['$q', '$timeout', '$http',
  function($q, $timeout, $http) {

    // create user variable
    var user = null;

    var isLoggedIn = function() {
      if (user) {
        return true;
      }
      return false;
    };

    var getUserStatus = function() {
      return user;
    };

    var login = function(username, password) {
      var deferred = $q.defer();

      $http.post('/login', {
          username: username,
          password: password
        })
        .success(function(data, status) {
          if (status === 200 && data.status) {
            user = true;
            deferred.resolve();
          } else {
            user = false;
            deferred.reject();
          }
        })
        .error(function(data) {
          user = false;
          deferred.reject();
        });

      return deferred.promise;
    };

    var logout = function() {
      var deferred = $q.defer();

      $http.get('/logout')
        .success(function(data) {
          user = false;
          deferred.resolve();
        })
        .error(function(data) {
          user = false;
          deferred.reject();
        });

      return deferred.promise;
    };

    var register = function(username, password, email, summonerName) {
      var deferred = $q.defer();

      $http.post('/register', {
          username: username,
          password: password,
          email: email,
          summonerName: summonerName
        })
        .success(function(data, status) {
          if (status === 200 && data.status) {
            deferred.resolve();
          } else {
            deferred.reject();
          }
        })
        .error(function(data) {
          deferred.reject();
        });

      return deferred.promise;
    };

    // return available functions for use in controllers
    return ({
      isLoggedIn: isLoggedIn,
      getUserStatus: getUserStatus,
      login: login,
      logout: logout,
      register: register
    });
  }
]);
