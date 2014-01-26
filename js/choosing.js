angular.module("hr",[])
.controller('choice', function($scope, $http, $templateCache) {
 $scope.categories = {
 'Calendar' : 'calendar.html',
 'Search' : "search.html",
 'intro' : "intro.html",
 };
    $scope.courses = [];
 $scope.load = function(){
     $http({method: "JSONP", url: "http://ec2-54-201-138-192.us-west-2.compute.amazonaws.com:8080/courses?callback=JSON_CALLBACK", cache : $templateCache}).
      success(function(data, status) {
        $scope.coursessss = data["courses"];
        angular.forEach($scope.coursessss, function(follower, index){
                $scope.courses.push(follower);
            });
      }).
      error(function(data, status) {
        $scope.data = data || "Request failed";
        $scope.status = status;
    });
  };
 });
