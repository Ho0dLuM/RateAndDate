(function() {

  'use strict';

  angular
    .module('rateAndDate.components.members')
    .service('memberService', memberService);

  memberService.$inject = ['$http'];

  function memberService($http) {
    this.test = 'this.member.service test';
  }

})();
