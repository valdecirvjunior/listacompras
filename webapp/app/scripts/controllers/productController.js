'use strict';

angular.module('listacompraApp').controller('productController', function ($scope, product) {
  product.query(function(result) {
    $scope.products = result;
  });

  $scope.remove = function($product,$index){
    product.remove({id:$product.id}, function($result){
      $scope.products.splice($index,1);
    },function($error){
      console.log($error)
    });
 	};

  $scope.save = function($product) {
    for (var i = 0; i < $scope.products.length; i++){
      if ($scope.products[i].produto == $product.produto){
        window.alert("Este produto ja existe na lista.");
        $scope.product = null;
        return;
      }
    }
    if ($product.importante == undefined)
      $product.importante = false;
    product.save($product,function(result){
    $scope.products.push(result);
    console.log(result.importante);
    $scope.product = null;});
  };

  $scope.update = function($product) {
    product.update($product);
  };

  $scope.editar = function($product) {
    $product.edit = true;
  };

  $scope.listaVazia = function($product){
    var result = null;
    if (($scope.products) == 0){
      result = true;
    }
    return result;
  };


});

