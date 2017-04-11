//angular.module('myResp')
//    .controller("aboutController", ['$scope', '$http', '$log','$location', 'myJson', 
//        function($scope, $http, $log, $location, myJson){
//         // Chapters  json data
//        myJson.all().then(function(resp) {
//            $scope.skills = resp;
//        });
angular.module('myResp')
    .controller("aboutController", ['$scope', function($scope){    
         $scope.skills = [
        { "name": "Languages/Scripts",
          "list": [
                {"prof": "HTML5"},
                {"prof": "CSS3"},
                {"prof": "XSLT"},
                {"prof": "JavaScript"} 
            ]
        },
        { "name": "Framework",
          "list": [
                {"prof": "Twitter Bootstrap"},
                {"prof": "SCSS"},
                {"prof": "Angular JS"}
            ]
        },
        { "name": "Web Development",
          "list": [
                {"prof": "HTML5"},
                {"prof": "CSS3"},
                {"prof": "XML"},
                {"prof": "XSLT"},
                {"prof": "JQuery"}               
            ]
        },
        { "name": "Operating Systems",
          "list": [
                {"prof": "Win XP, 7, 8 and 10"}
            ]
        },
        { "name": "Testing",
          "list": [
              {"prof": "Unit Testing"}
          ]
        },
        { "name": "Database",
          "list": [
              {"prof": "MySQL"}
          ]
        },
        { "name": "Version Controller",
          "list": [
              {"prof": "Git"},
              {"prof": "Tortoise SVN"}
          ]
        },
        { "name": "Building/Testing Tools",
          "list": [
                {"prof": "Web Development Tool"},
                {"prof": "Firebug"},
                {"prof": "Color Picker"},
                {"prof": "Page Ruler"}        
            ]
        },
        { "name": "Tools",
          "list": [
                {"prof": "O365/SharePoint Online Designer"},
                {"prof": "SharePoint Designer 2007 and 2010"},
                {"prof": "Adobe Dreamweaver cs5.1"},
                {"prof": "Adobe Photoshop cs5.1"},
                {"prof": "Visual Studio 2010 and 2013"},
                {"prof": "Microsoft's FrontPage"},
                {"prof": "Logi XML studio"},
                {"prof": "Notepad++"},
                {"prof": "Adobe Dreamweaver"},
                {"prof": "Eclipse"},
                {"prof": "Oracle Web Logic"}
            ]
        },
        { "name": "Prototypes",
          "list": [
                {"prof": "Microsoft Visio"},
                {"prof": "Proto"}
            ]
        }];    
}]);