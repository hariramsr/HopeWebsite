(function () {
  'use strict';
  angular
    .module('hopeApp')
    .factory('resourceService', resourceService);

  resourceService.$inject = ['hopeService', '$http'];
  function resourceService(hopeService, $http) {
    var service = {
      getDataFromJson: getDataFromJson
    };
    return service;

    function getDataFromJson() {
      $http.get('./Shared/appData.json').then(function successCallback(response) {
        hopeService.saveDataFromJSON(response.data);
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
    }
  }
})();

// $http.post('https://apphope.herokuapp.com/getConfigData').then(function successCallback(response) {
// $http.get('./appData.json').then(function successCallback(response) {
//   hopeService.saveDataFromJSON(response.data);