(function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', function ($scope) {
    $scope.items = "";
    $scope.message = "";
    $scope.fontColor = "black";
    $scope.border = "";

    $scope.checkItems = function () {
      var itemsArray = $scope.items.split(",");
      var count = 0;
      itemsArray.forEach((item) => {
        console.log(item.length);
        if( item.trim() != "" ) {
          count++;
        }
      });
      if(count == 0) {
        $scope.message = "Please enter data first."
        $scope.fontColor = "red";
        $scope.border = "border-style: solid; border-color: red;";
      } else if( count > 3 ){
        $scope.message = "Too much!";
        $scope.fontColor = "green";
        $scope.border = "border-style: solid; border-color: green;";
      } else {
        $scope.message = "Enjoy!";
        $scope.fontColor = "green";
        $scope.border = "border-style: solid; border-color: green;";
      }

    };


  });

})();
