(function() {

  'use strict';

  angular
    .module('rateAndDate.components.members')
    .service('memberService', memberService);

  memberService.$inject = ['$http'];

  function memberService($http) {
    console.log('memberservice');
  }

})();
