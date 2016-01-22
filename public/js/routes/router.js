app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'pages/home.html',
      access: {
        restricted: false
      }
    })
    .state('items', {
      url: '/items',
      templateUrl: 'pages/items.html',
      access: {
        restricted: false
      }
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'pages/profile.html',
      access: {
        restricted: true
      }
    })
    .state('champions', {
      url: '/champions',
      templateUrl: 'pages/champions.html',
      access: {
        restricted: false
      }
    })
    .state('abilities', {
      url: '/abilities',
      templateUrl: 'pages/abilities.html',
      access: {
        restricted: false
      }
    })
    .state('masteries', {
      url: '/masteries',
      templateUrl: 'pages/masteries.html',
      access: {
        restricted: false
      }
    })
    .state('login', {
      url: '/login',
      templateUrl: 'pages/login.html',
      access: {
        restricted: false
      }
    })
    .state('register', {
      url: '/register',
      templateUrl: 'pages/register.html',
      access: {
        restricted: false
      }
    })
    .state('runes', {
      url: '/runes',
      templateUrl: 'pages/runes.html',
      access: {
        restricted: false
      }
    });

  $urlRouterProvider.otherwise('/');

});
