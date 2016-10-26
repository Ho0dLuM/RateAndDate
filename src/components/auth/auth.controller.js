(function() {

  'use strict';

  angular
    .module('rateAndDate.components.auth', [])
    .controller('authController', authController);

  authController.$inject = ['authService'];

  function authController(authService) {
    console.log(authService.test);
  }

})();
