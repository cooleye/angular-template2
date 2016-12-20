angular.module('app.mineModule',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'index.mine',
    url:'/mine',
    css:'pages/mine/mine.css',
    templateUrl:'pages/mine/mine.html'
  })

})
