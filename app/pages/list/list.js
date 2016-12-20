angular.module('app.listModule',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'index.list',
    url:'/list',
    css:'pages/list/list.css',
    templateUrl:'pages/list/list.html'
  })


})
