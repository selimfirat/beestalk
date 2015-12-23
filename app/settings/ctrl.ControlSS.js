(function () {
    'use strict';

    angular
        .module('app.settings')
        .controller('ControlSSCtrl', ControlSS);

    ControlSS.$inject = ["$scope", "auth"];

    function ControlSS($scope, auth) {


        $scope.linkSS = linkSSFnc;
        $scope.unlinkSS = unlinkSSFnc;


        $scope.sites = [
          {
            name: "facebook",
            connected: false
          },
          {
            name: "twitter",
            connected: false
          },{
            name: "instagram",
            connected: false
          },
          {
            name: "foursquare",
            connected: false
          },
          {
            name: "google",
            connected: false
          }
        ];
                activate();



        $scope.$on("getUserInformation", function(){
          angular.forEach($scope.sites, function(val, key){
              val.connected = auth.user[val.name] ? true : false;
          });
        });
        function activate(){
          console.log("Stalking sites: ", auth.user, $scope.sites);

              angular.forEach($scope.sites, function(val, key){
                if (auth.user[val.name]) {
                  val.connected = true;
                }
              });
        }
        function linkSSFnc(network) {
          auth.link(network);
        }

        function unlinkSSFnc(network) {
          auth.unlink(network);
        }
    }
})();
