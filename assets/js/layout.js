
angular.module("myResp").controller("layoutCtrl", ["$location", "$scope",
    function ($location, $scope) {        
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