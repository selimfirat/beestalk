(function () {
    'use strict';

    angular
        .module('app')
        .service('stalkings', stalkings);

    stalkings.$inject = ["auth", "$state", "db", "api", "instagram", "$q", "twitter"];

    function stalkings(auth, $state, db, api, instagram, $q, twitter) {
        var self = this;
        self.newStalking = newStalkingFnc;
        self.getStalking = getStalkingFnc;
        self.getStalkingsList = getStalkingsListFnc;
        self.editStalking = editStalkingFnc;
        self.checkStalking = checkStalkingFnc;
        self.deleteStalking = deleteStalkingFnc;

        function delStalkingFnc() {

        }

        function checkStalkingFnc(stalking){
            return $q(function(resolve, reject){
              resolve(stalking);
            }).then(function(stalking){
                return stalking.instagram.username ? instagram.isUserExist(stalking.instagram.username).then(function(res){
                  stalking.instagram.displayName = res.full_name;
                  stalking.instagram.userId = res.id;
                  console.log("Instagram User: ", res);
                  stalking.pictureUri = stalking.pictureUri || res.profile_picture;
                  return stalking;
                }) : stalking;
            })
            .then(function(stalking){
                return stalking.twitter.username ? twitter.isUserExist(stalking.twitter.username).then(function(res){
                  stalking.twitter.displayName = res.name;
                  stalking.twitter.userId = res.id_str;
                  console.log("Twitter User: ", res);
                  stalking.pictureUri = stalking.pictureUri || res.profile_image_url.replace('_normal', '');
                  return stalking;
                }) : stalking;
            });
        };

        function deleteStalkingFnc(stalkingId) {
            return api.delStalking(stalkingId);
        }

        function newStalkingFnc(stalking) {
            return self.checkStalking(stalking).then(function(stalking){
              return api.newStalking(stalking);
            });
        };
        function editStalkingFnc(stalking) {
            return api.editStalking(stalking);
        };
        function getStalkingFnc(_id) {
            return api.getStalking(_id);
        }

         function getStalkingsListFnc() {
             return api.listStalkings();
         };
    }
})();
