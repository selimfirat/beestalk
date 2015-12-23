(function () {
    'use strict';

    angular
        .module('app.api')
        .service('api', api);

    api.$inject = ["$http"];

    function api($http) {
        var self = this;
        self.newStalking = newStalkingFnc;
        self.delStalking = delStalkingFnc;
        self.listStalkings = listStalkingsFnc;
        self.getStalking = getStalkingFnc;
        self.editStalking = editStalkingFnc;
        self.getAllStalkingTweets = getAllStalkingTweetsFnc;
        self.getAllStalkingPhotos = getAllStalkingPhotosFnc;
        self.getStalkingTweets = getStalkingTweetsFnc;
        self.getStalkingPhotos = getStalkingPhotosFnc;

        var serverUri = config.serverUri;

        function getAllStalkingTweetsFnc() {
            return $http.get(serverUri + "/twitter/allStalkings/tweets").then(function (res) {
                return res.data;
            }, function (err) {
                console.log("Error on getting all stalking tweets: ", err);
            });
        }

        function getAllStalkingPhotosFnc() {
            return $http.get(serverUri + "/instagram/allStalkings/photos").then(function (res) {
                return res.data;
            }, function (err) {
                console.log("Error on getting all stalking photos: ", err);
            });
        }

        function getStalkingTweetsFnc(stalkingId) {
            return $http.get(serverUri + "/twitter/user/tweets?stalkingId=" + stalkingId).then(function (res) {
                return res.data;
            }, function (err) {
                console.log("Error on getting stalking tweets: ", err);
            });
        }

        function getStalkingPhotosFnc(stalkingId) {
            return $http.get(serverUri + "/instagram/user/photos?stalkingId="+stalkingId).then(function (res) {
                return res.data;
            }, function (err) {
                console.log("Error on getting stalking photos: ", err);
            });
        }

        function newStalkingFnc(stalking){
           return $http.post(serverUri + "/api/me/stalkings", stalking).then(function(res){
             return res.data;
           }, function(err){
             console.log("Error on new stalking: ", err);
           });
        }
        function getStalkingFnc(_id){
          return $http.get(serverUri + "/api/me/stalkings", { params: { stalkingId: _id } }).then(function(res){
            return res.data[0];
          }, function(err){
            console.log("Error on getting a stalking: ", err);
          });
        }

        function listStalkingsFnc(){
          return $http.get(serverUri + "/api/me/stalkings").then(function(res){
            return res.data;
          }, function(err){
            console.log("Error on listing stalkings: ", err);
          });
        }
        function delStalkingFnc(_id){
          return $http.delete(serverUri + "/api/me/stalkings?stalkingId=" + _id).then(function (res) {
            return res.data;
          }, function(err){
            console.log("Error on delete stalking: ", err);
          });
        }
        function editStalkingFnc(stalking){
          return $http.put(serverUri + "/api/me/stalkings", stalking).then(function(res){
            return res.data;
          }, function(err){
            console.log("Error on editing stalking: ", err);
          });
        }

    }

})();
