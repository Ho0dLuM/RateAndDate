(function() {

  'use strict';

  angular
    .module('rateAndDate.components.auth')
    .service('authService', authService);

  authService.$inject = ['$http'];

  function authService($http) {
    this.test = 'this.auth.service test';
  }

})();
