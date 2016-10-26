(function() {

  'use strict';

  angular
    .module('rateAndDate', [
      'ngRoute',
      'rateAndDate.config',
      'rateAndDate.components.auth',
      'rateAndDate.components.members'
    ]);

})();
