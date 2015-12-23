(function () {
    'use strict';

    angular
        .module('app.access')
        .service('auth', auth);

    auth.$inject = ["db", "$q", "$rootScope", "$state", "$auth", "$http"];

    function auth(db, $q, $rootScope, $state, $auth, $http) {
        var self = this;
        self.isAuthenticated = $auth.isAuthenticated;
        self.authenticate = authenticateFnc;
        self.logout = logoutFnc;
        self.link = linkFnc;
        self.unlink = unlinkFnc;
        self.user = {};

        if (self.isAuthenticated()) {
          getUserInformation().then(null, function(err){
            console.log(err);
          });
        }

        function getUserInformation() {
          return $http.get(config.baseUrl + "/api/me").then(function(res){
            self.user = res.data;
            $rootScope.pictureUri = self.user.picture;
            $rootScope.displayName = self.user.displayName;
            $rootScope.$broadcast("getUserInformation");
            console.log("User: ", self.user);
            return res.data;
          }, function(err){
            console.log("Getting user information /api/me unsuccessful: ", err);
          });
        };

        function authenticateFnc(provider){
          return $auth.authenticate(provider).then(function(res){
              return getUserInformation();
          }, function(err){
            console.log("Error on authenticating " + provider + ": ", err);
          });
        };

        function linkFnc(provider){
          return $auth.link(provider).then(function(res){
            return getUserInformation();
          }, function(err){
            console.log("Error on linking " + provider + ": ", err);
          });
        };

        function unlinkFnc(provider){
          return $auth.unlink(provider).then(function(res){
            return getUserInformation();
          }, function(err){
            console.log("Error on unlinking " + provider + ": ", err);
          });
        };

        function logoutFnc(){
          return $auth.logout().then(function(res){
            console.log("Logout successful");
          }, function(err){
            console.log("Error on logout: ", err);
          });
        }
    }
})();
