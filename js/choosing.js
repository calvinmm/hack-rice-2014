angular.module("hr",[])
.controller('choice', function($scope) {
 $scope.categories = {
 'Calendar' : 'calendar.html',
 'Search' : "search.html",
 'intro' : "intro.html",
 };
 });
