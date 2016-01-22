var app = angular.module('leagueTracker', ['ui.router'])

.constant('SERVER', 'http://localhost:3000/')

//checks if user is logged in for restricted routes
.run(function($rootScope, $location, AuthFct, $state) {
  $rootScope.$on('$stateChangeStart', function(event, next, current) {
    if (next.access.restricted && AuthFct.isLoggedIn() === false) {
      console.log('next.access.restricted: ' + next.access.restricted + ' AuthFct.isLoggedIn(): ' + AuthFct.isLoggedIn());
      $location.path('/login');
      $state.go($state.current, {}, {
        reload: true
      });
    }

  });  
});
