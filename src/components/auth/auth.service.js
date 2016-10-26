(function() {

  'use strict';

  angular
    .module('rateAndDate.components.auth')
    .service('authService', authService);

  authService.$inject = ['$http'];

  function authService($http) {
    const baseUrl = 'http://galvanize-student-apis.herokuapp.com/gdating/auth/';

    this.login = (user) => {
      return $http({
        method: 'POST',
        url: baseUrl + 'login',
        data: user,
        headers: {'Content-Type': 'application/json'}
      });
    };

    this.register = (user) => {
      return $http({
        method: 'POST',
        url: baseUrl + 'register',
        data: user,
        headers: {'Content-Type': 'application/json'}
      });
    };
  }

})();
