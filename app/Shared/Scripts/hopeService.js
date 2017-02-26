
(function () {
  'use strict';
  angular
    .module('hopeApp')
    .factory('hopeService', hopeService);

  hopeService.$inject = ['$state'];
  function hopeService($state) {
    var service = {
      getDataFromJSON: getDataFromJSON,
      saveDataFromJSON: saveDataFromJSON
    };
    return service;

    var resources;

    function getDataFromJSON() {
      return resources;
    }
    //
    function saveDataFromJSON(param) {
      resources = param;
    }

  }
})();