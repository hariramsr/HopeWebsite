'use strict';
angular.module('hopeApp').controller('eventInfoController', ['$scope', 'eventService', function ($scope, eventService) {
    $scope.event = eventService.getCurrentUser();
}]);