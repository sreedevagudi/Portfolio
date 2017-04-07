var myApp = angular.module('myResp', ['ngRoute']);
myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider        
        .when('/', {
            templateUrl: 'views/about.html',
            controller: 'aboutController'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutController'
        })
        .when('/services', {
            templateUrl: 'views/services.html',
            controller: 'servicesController'
        })
        .when('/portfolio', {
            templateUrl: 'views/portfolio.html',
            controller: 'portfolioController'
        })
        .when('/pricing', {
            templateUrl: 'views/pricing.html',
            controller: 'pricingController'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactController'
        })
        .otherwise({
            redirectTo: '/'
        });
    
//    angular.element(document).ready(function(){
//        // Add smooth scrolling to all links in navbar + footer link
//      $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
//        // Make sure this.hash has a value before overriding default behavior
//        if (this.hash !== "") {
//          // Prevent default anchor click behavior
//          event.preventDefault();
//
//          // Store hash
//          var hash = this.hash;
//
//          // Using jQuery's animate() method to add smooth page scroll
//          // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
//          $('html, body').animate({
//            scrollTop: $(hash).offset().top
//          }, 900, function(){
//
//            // Add hash (#) to URL when done scrolling (default click behavior)
//            window.location.hash = hash;
//          });
//        } // End if
//      });
//
//      $(window).scroll(function() {
//        $(".slideanim").each(function(){
//          var pos = $(this).offset().top;
//
//          var winTop = $(window).scrollTop();
//            if (pos < winTop + 600) {
//              $(this).addClass("slide");
//            }
//        });
//      });
//    });
}]);

myApp.controller("aboutController", function($scope){
    $scope.message = "i am in About Page";
});
