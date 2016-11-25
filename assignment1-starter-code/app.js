(function () {
'use strict';

angular.module("LunchCheck", [])
.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ["$scope"];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.lunchCount = 0;
  $scope.message = "";

  $scope.CountArray = function () {
    var lunchArray = $scope.lunchMenu.toString().split(',');

    for (var i = lunchArray.length - 1; i >= 0; i--) {
      if (lunchArray[i] === "") {
        lunchArray.splice(i, 1);
      }
    }
    console.log(lunchArray);
    console.log(lunchArray.length);
        if (lunchArray.length > 0 && lunchArray.length < 4) {
            $scope.message = "Enjoy!";
        }else if (lunchArray.length > 3){
            $scope.message = "Too much!";
        }else {
            $scope.message = "Please enter data first."
        }
      };
  };
})();
