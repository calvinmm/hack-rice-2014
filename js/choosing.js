angular.module("hr",[])
.controller('choice', function($scope) {
 $scope.categories = {
 'Calendar' : 'calendar.html',
 'Search' : "search.html",
 'intro' : "intro.html",
 };
 $scope.courses = {};
 $scope.load = function(){
     $scope.courses = $http.jsonp("courses?callback=JSON_CALLBACK");
 };
 });
