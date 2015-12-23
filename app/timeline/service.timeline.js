(function () {
    'use strict';

    angular
        .module('app.timeline')
        .service('timeline', timeline);

    timeline.$inject = ["api"];

  function timeline(api) {
          var self = this;
          self.getAllStalkingTweets = getAllStalkingTweetsFnc;
          self.getAllStalkingPhotos = getAllStalkingPhotosFnc;
          self.getAllStalkingStatuses = getAllStalkingStatusesFnc;


          self.getStalkingTweets = getStalkingTweetsFnc;
          self.getStalkingPhotos = getStalkingPhotosFnc;
          self.getStalkingStatuses = getStalkingStatusesFnc;
            
          function  getAllStalkingTweetsFnc(){
            return api.getAllStalkingTweets();
          }

          function getAllStalkingPhotosFnc(){
            return api.getAllStalkingPhotos();
          }

          function getStalkingPhotosFnc(stalkingId){
              return api.getStalkingPhotos(stalkingId);
          }
          
          function getStalkingTweetsFnc(stalkingId) {
              return api.getStalkingTweets(stalkingId);
          }

          function getStalkingStatusesFnc(stalkingId) {
              // Returns statuses
              return self.getStalkingTweets(stalkingId).then(function (res) {
                  return res;
              }).then(function (tweets) {
                  return self.getStalkingPhotos(stalkingId).then(function (photos) {
                      return _.sortBy(tweets.concat(photos), function (el) {
                          return -el.created_time;
                      });
                  });
              });
          }

          function getAllStalkingStatusesFnc(options){
            // Returns statuses
            return self.getAllStalkingTweets().then(function(res) {
              return res;
            }).then(function(tweets){
              return self.getAllStalkingPhotos().then(function(photos) {
                return _.sortBy(tweets.concat(photos), function(el){
                    return -el.created_time;
                });
              });
            });
          }

  }


})();
