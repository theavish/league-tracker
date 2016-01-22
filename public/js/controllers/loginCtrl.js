app.controller('loginCtrl', ['$scope', '$location', 'AuthFct',
  function($scope, $location, AuthFct) {

    console.log(AuthFct.getUserStatus());

    $scope.login = function() {
      // initial values
      $scope.error = false;
      $scope.disabled = true;

      // call login from service
      AuthFct.login($scope.loginForm.username, $scope.loginForm.password)
        // handle success
        .then(function() {
          $location.path('/');
          $scope.disabled = false;
          $scope.loginForm = {};
        })
        // handle error
        .catch(function() {
          $scope.error = true;
          $scope.errorMessage = "Invalid username and/or password";
          $scope.disabled = false;
          $scope.loginForm = {};
        });

    };

    $scope.register = function() {

      // initial values
      $scope.error = false;
      $scope.disabled = true;

      // call register from service
      AuthFct.register($scope.registerForm.username, $scope.registerForm.password)
        // handle success
        .then(function() {
          $location.path('/login');
          $scope.disabled = false;
          $scope.registerForm = {};
        })
        // handle error
        .catch(function() {
          $scope.error = true;
          $scope.errorMessage = "Something went wrong!";
          $scope.disabled = false;
          $scope.registerForm = {};
        });

    };
  }
]);
