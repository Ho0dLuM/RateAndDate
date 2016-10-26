(function() {

  'use strict';

  angular
    .module('rateAndDate.components.auth', [])
    .controller('authController', authController);

  authController.$inject = ['authService'];

  function authController(authService) {
    const that = this;
    that.user = {};
    that.newUser = {};
    that.onSubmit = () => {
      authService.login(that.user)
      .then((user) => {
        localStorage.setItem('token', user.data.token);
      });
      that.user = {};
    };
    that.register = () => {
      authService.register(that.newUser)
      .then((user) => {
        localStorage.setItem('token', user.data.token);
      });
      that.newUser = {};
    };
  }

})();
