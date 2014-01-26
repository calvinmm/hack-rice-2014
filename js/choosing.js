angular.module("hr",[])
.controller('choice', function($scope) {
 $scope.categories = {
 'Calendar' : 'calendar.html',
 'Search' : "search.html",
 'intro' : "intro.html",
 };
 $scope.courses = {};
 $scope.load = function(){
     $scope.courses = $http.jsonp("http://ec2-54-201-138-192.us-west-2.compute.amazonaws.com:8080/courses?callback=JSON_CALLBACK");
 };
 });
