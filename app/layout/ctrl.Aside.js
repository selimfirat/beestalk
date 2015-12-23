(function () {
    'use strict';

    angular
        .module('app.layout')
        .controller('AsideCtrl', Aside);

    Aside.$inject = ["$scope", "auth"];

    function Aside($scope, auth) {
        var self = this;
        $scope.displayName = auth.user.displayName;
        $scope.pictureUri = auth.user.picture;

        $scope.$on("getUserInformation", function(){
          $scope.displayName = auth.user.displayName;
          $scope.pictureUri = auth.user.picture;
        });
    }

})();
