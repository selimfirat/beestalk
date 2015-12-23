(function () {
    'use strict';

    angular
        .module('app.rest')
        .service('instagram', instagram);

    instagram.$inject = ['$http', "auth"];

    function instagram($http, auth) {
      var self = this;
      self.isUserExist = isUserExistFnc;

      function isUserExistFnc(username){
        return $http.jsonp("https://api.instagram.com/v1/users/search?access_token="+auth.user.instagramToken+"&q="+username+"&callback=JSON_CALLBACK")
        .then(function(res){
          var data = _.find(res.data.data, function(d){
            return d.username == username;
          });
          return data;
        }).then(function(data){
          if (data) {
            return data;
          }else {
            throw new Error("Instagram user not found");
          }
        });
      }


    }
})();
