angular.module('app.cartModule',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'index.cart',
    url:'/cart',
    css:'pages/cart/cart.css',
    templateUrl:'pages/cart/cart.html'
  })


})
