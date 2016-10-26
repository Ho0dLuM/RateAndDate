(function() {

  'use strict';

  angular
    .module('rateAndDate.config', [])
    .config(['$routeProvider', routes]);

    function routes($routeProvider) {
      $routeProvider
        .when('/register', {
          controller: 'authController',
          controllerAs: 'authCtrl',
          templateUrl: 'components/auth/auth.view.html'
        })
        .when('/members', {
          controller: 'memberController',
          controllerAs: 'memberCtrl',
          templateUrl: 'components/members/members.view.html'
        });
    }

})();
