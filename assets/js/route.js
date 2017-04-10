angular.module("myResp").config(["$routeProvider", function ($routeProvider) {
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

}]);