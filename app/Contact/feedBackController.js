'use strict';

angular.module('confusionApp')

    .controller('FeedbackController', ['$scope', 'feedbackFactory', function ($scope, feedbackFactory) {

        $scope.sendFeedback = function () {

            if ($scope.feedback.agree && ($scope.feedback.mychannel === "")) {
                $scope.invalidChannelSelection = true;
                console.log('incorrect');
            }
            else {
                $scope.invalidChannelSelection = false;
                feedbackFactory.getFeedback().save($scope.feedback);
                $scope.feedbackForm.$setPristine();
                console.log('Saved feedback: ' + JSON.stringify($scope.feedback));
                $scope.feedback = {mychannel: "", firstName: "", lastName: "", agree: false, email: ""};
            }
        };
    }])