'use strict';
angular.module('hopeApp').factory('eventService', ['hopeService', function (hopeService) {
    var event;
    return {
        setCurrentUser: function (current) {
            event = current;
        }
        , getCurrentUser: function () {
            return event;
        }
    };
}]);