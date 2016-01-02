app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'pages/home.html'
    })
    .state('items', {
        url: '/items',
        templateUrl: 'pages/items.html'
    })
    .state('profile', {
        url: '/profile',
        templateUrl: 'pages/profile.html'
    })
    .state('champions', {
        url: '/champions',
        templateUrl: 'pages/champions.html'
    })
    .state('abilities', {
        url: '/abilities',
        templateUrl: 'pages/abilities.html'
    })
    .state('masteries', {
        url: '/masteries',
        templateUrl: 'pages/masteries.html'
    })
    .state('runes', {
        url: '/runes',
        templateUrl: 'pages/runes.html'
    });

  $urlRouterProvider.otherwise('/home');

});
