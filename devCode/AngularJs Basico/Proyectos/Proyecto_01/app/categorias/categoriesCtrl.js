(function(){
   "use strict";
   angular.module("newsWikiApp")//camel case
       .controller("CategoriesCtrl",["categoriesService",CategoriesCtrl]);//pascal case

   function CategoriesCtrl(categoriesService){
       var me = this;
        //1era versión de la carga de categories
       //me.categories = ["Política","Economía","Deportes","Moda","Mundo"];

       //2da versión de la carga de categories
       /*
       categoriesService.then(function(response){
            me.categories = response.data;
       });
        */
       //3ra versión de la carga de categories
       //patrón Revealing Module
       categoriesRepository.getCategories(
           {
               categoriesService:categoriesService,
               success: function(data){
                   me.categories = data;
               }
           }
       );

       me.showCategories = true;

       me.toogleCategories = function(){
         me.showCategories = !me.showCategories;
       };
   }
//se crea una función cuyo nombre es el nombre de la variable
   var categoriesRepository = (function(){
      var me = {};

      me.getCategories = function(options){
        options.categoriesService.then(function (response) {
            options.success(response.data);
        });
      };

      return{
          getCategories : me.getCategories
      }
    }());
}());