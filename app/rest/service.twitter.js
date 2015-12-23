(function () {
    'use strict';

    angular
        .module('app.rest')
        .service('twitter', twitter);

    twitter.$inject = ['$http'];

    function twitter($http) {
      var self = this;
      self.isUserExist = isUserExistFnc;

      function isUserExistFnc(username){
        return $http.get(config.serverUri + "/twitter/users/show?username="+username)
        .then(function(res){
          if (res) {
            return res.data;
          }else {
            throw new Error("Twitter user not found");
          }
        });
      }
    }
})();
