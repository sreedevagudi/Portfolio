angular.module('myResp', ['ngRoute', 'ngMaterial', 'ngMessages', 'ngSanitize', 'ngResource', 'ui.bootstrap', 'ngAnimate', 'ngTouch'])

.config(['$httpProvider', function ($httpProvider) {

    $httpProvider.interceptors.push(['$q', '$rootScope', function ($q, $rootScope) {
        return {
            'request': function (config) {
                $rootScope.$broadcast('loading-started');
                return config || $q.when(config);
            },
            'response': function (response) {
                $rootScope.$broadcast('loading-complete');
                return response || $q.when(response);
            }
        };
    }]);

}]);