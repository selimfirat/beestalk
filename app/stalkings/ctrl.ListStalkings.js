(function () {
    'use strict';

    angular
        .module('app.stalkings')
        .controller('StalkingsListCtrl', StalkingsListCtrl);

    StalkingsListCtrl.$inject = ["stalkings", "$scope", "$state"];

    function StalkingsListCtrl(stalkings, $scope, $state) {
        var self = this;
        $scope.toEdit = toEditFnc;
        $scope.toBee = toBeeFnc;
        stalkings.getStalkingsList().then(function(res){
          $scope.stalkings = res;
          console.log("Stalkings: ", res);
        });

        function toEditFnc(_id) {
            $state.go('user.editStalking', { _id: _id });
        }

        function toBeeFnc(_id) {
            $state.go('user.timeline', { _id: _id });
        }
    }
})();
