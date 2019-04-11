
//IIFE Inmediately Invoked Function Expression
(function (){
    "use strict";
    var  app = angular.module("newsWikiApp",
                                    ["common.services"
                                    ,"common.servicesMock"
                                    ,"ui.router"
                                    ,"ui.mask"
                                    ,"ui.bootstrap"
                                    ,"ngMessages"]);

    app.config(function($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise("home");
        $stateProvider
            .state("home", {
                url:"/"
                ,templateUrl:"app/welcomeView.html"
            })
            .state("newsList",{
                url: "/noticias"
                ,templateUrl: "app/news/newsListView.html"
                ,controller: "NewsCtrl as vm"
            })
            .state("newsEdit",{
                abstract: true
                ,url:"/noticias/edit/:idNoticia"
                ,templateUrl: "app/news/newsEditView.html"
                ,controller: "NewsEditCtrl as vm"
                ,resolve:{
                    newsResource: "newsResource"
                    ,newsItem : function(newsResource, $stateParams){
                                    var idNoticia = $stateParams.idNoticia;
                                    return newsResource.get({idNoticia: idNoticia}).$promise;
                                }
                }
            })
            .state("newsEdit.info",{
                url: "/info",
                templateUrl: "app/news/newsEditInfoView.html"
            })
            .state("newsEdit.tags",{
                url: "/tags",
                templateUrl: "app/news/newsEditTagsView.html"
            })
            .state("newsDetail",{
                url: "/noticias/:idNoticia"
                ,templateUrl: "app/news/newsDetailView.html"
                ,controller: "NewsDetailCtrl as vm"
                //lo voy a usar cuando quiero usar data de una vista que se carga por primera vez
                ,resolve:{
                    //Es aquel que se encarga de hacer todos los gets y los posts
                    newsResource: "newsResource"
                    //objeto que quiero cargar en mi vista al inicio
                    //le paso el newsResource que acabo de referenciar
                    ,newsItem : function(newsResource, $stateParams){
                        var idNoticia = $stateParams.idNoticia;
                        //$promise devuelve en caso sea satisfactorio la instancia de la noticia
                        return newsResource.get({idNoticia: idNoticia}).$promise;
                    }
                }
        })


    });

    app.config(function($provide){
        $provide.decorator("$exceptionHandler",["delagate",function($delegate){
            return function(exception, cause){
                exception.message = "Por favor contáctese con Help Desk! " +
                    "\n Message: " + exception.message;

                $delegate(exception,cause);
                toastr.error(exception.message);
            }
        }])
    });
}());



