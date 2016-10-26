(function() {

  'use strict';

  angular
    .module('rateAndDate.components.members', [])
    .controller('memberController', memberController);

  memberController.$inject = ['memberService'];

  function memberController(memberService) {
    console.log(memberService.test);
  }

})();
