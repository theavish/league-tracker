app.controller('styleCtrl', function($scope, $rootScope, $location) {
  var returnCurrentPage = function() {
    var currentPage = $location.$$path.slice(1);
    if (currentPage) {
      return currentPage;
    }
  };

  $rootScope.$on('$stateChangeSuccess',
    function(event, toState, toParams, fromState, fromParams) {
      returnCurrentPage();
      _.each(document.getElementsByClassName('active'), function(el, idx, coll) {
        el.className = '';
      });
      if (returnCurrentPage() && returnCurrentPage() !== 'login') {
        document.getElementById(returnCurrentPage() + '-tab').className = 'active';
      }
    });
});
