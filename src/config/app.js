(function() {

  'use strict';

  angular
    .module('rateAndDate', [
      'ui.router',
      'ui.bootstrap',
      'rateAndDate.config',
      'rateAndDate.components.auth',
      'rateAndDate.components.members'
    ]);

})();
