(function() {

  'use strict';

  angular
    .module('rateAndDate.config', ['ui.router'])
    .config(routes)
    .run(function($templateCache) {
      $templateCache.removeAll();
    });

  function routes($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        //controller: 'landingController',
        //controllerAs: 'landingCtrl',
        templateUrl: 'components/landing/landing.view.html'
      })
      .state('register', {
        url: '/register',
        controller: 'authController',
        controllerAs: 'authCtrl',
        templateUrl: 'components/auth/auth.view.html'
      })
      .state('members', {
        url: '/members',
        controller: 'memberController',
        controllerAs: 'memberCtrl',
        templateUrl: 'components/members/members.view.html'
      })
  }

})();
