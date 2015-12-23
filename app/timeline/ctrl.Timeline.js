(function () {
    'use strict';

    angular
        .module('app.timeline')
        .controller('TimelineCtrl', Timeline);

    Timeline.$inject = ["timeline", "$scope", "$stateParams"];

    function Timeline(timeline, $scope, $stateParams) {
        var self = this;
        console.log("test:", $stateParams);
        if (!$stateParams._id) {
            timeline.getAllStalkingStatuses().then(function (res) {
                console.log(res);
                $scope.statuses = res;
            });
        } else {
            timeline.getStalkingStatuses($stateParams._id).then(function (res) {
                console.log(res);
                $scope.statuses = res;
            });
        }

    }

})();
