
var app = angular.module('myDessertApp', []);
app.controller('dessertController', function($scope, $http) {
  $scope.desserts = {};
  $scope.dessertList = [];
  $scope.Ingredients = [];
  $scope.dessertImg = "";
  $scope.user = "Siri";
  $http.get("newd.json")
    .then(function(response) {
      $scope.desserts = response;
      $scope.dessertList = response.data.Desserts;
      console.log("dessertList", $scope.dessertList);
      $scope.showDessert = function(index) {
         $scope.Ingredients = [];
               $scope.Recipe = $scope.dessertList[index].Recipe;
         for(var i =0; i< $scope.dessertList[index].Ingredients.length; i++){
        $scope.Ingredients.push({"eachItem": $scope.dessertList[index].Ingredients[i],
        "eachQuantity": $scope.dessertList[index].Quantity[i],
        "eachMeasures": $scope.dessertList[index].Measurements[i]
      });
       $scope.dessertImg = $scope.dessertList[index].img;
       $scope.dessertRating = [].constructor($scope.dessertList[index].CustomerRating);
      $scope.dessertNoRating = [].constructor(5-$scope.dessertList[index].CustomerRating);
      }
      };
   
    $scope.showDessert(0);
    });
 
    
   
});
