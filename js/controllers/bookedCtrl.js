angular.module('devmtnTravel')
.controller('bookedCtrl', function($scope, mainSrv, $stateParams){

var urlPara = $stateParams.id;

  function getLocation(){
  $scope.location = mainSrv.travelInfo;
  for (var i = 0; i < $scope.location.length; i++) {

    if ($scope.location[i].id == urlPara) {
      $scope.city = $scope.location[i].city;
      $scope.image = $scope.location[i].image;
    }
  }}

    getLocation();

    $scope.myBgd = "'background-image': 'url({{image}})'";

})
