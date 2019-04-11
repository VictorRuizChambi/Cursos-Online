(function(){
   "use strict";
   angular.module("common.services")
       .factory("categoriesService",categoriesService);
   function categoriesService($http){
       //esto retorna una promesa
       return $http.get("/api/categorias");
   }
}());