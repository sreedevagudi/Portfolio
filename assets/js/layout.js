
angular.module("myResp")
//    .factory('myJson', ['$http', function ($http){
//        var myJson = {};
//        myJson.get = $http.get('assets/js/json/profile.json').then(function(resp){
//            return resp.data;
//        });
//        myJson.all = function(){
//            return myJson.get;
//        };
//        return myJson;
//    }])
    .controller("layoutCtrl", ["$location", "$scope",
    function ($location, $scope) {        
        
        $scope.toggleActive = true;
        
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };  
        
        angular.element(document).ready(function(){
          $(window).scroll(function() {
            $(".slideanim").each(function(){
              var pos = $(this).offset().top;

              var winTop = $(window).scrollTop();
                if (pos < winTop + 600) {
                  $(this).addClass("slide");
                }
            });
          });
        });

    }]);