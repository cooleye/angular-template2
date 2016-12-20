angular.module('App',[
  'ui.router',
  'angularCSS',
  'app.homeModule',
  'app.listModule',
  'app.cartModule',
  'app.mineModule'
])

.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/index/home');

    $stateProvider

    .state({
      name:'index',
      url:'/index',
      css:'pages/footer/footer.css',
      templateUrl:'pages/footer/footer.html',
      controller:function(){
          angular.element('#container').addClass('animated slideInRight')
      }
    })

    .state({
      name:'search',
      url:'/search',
      templateUrl:'pages/search/search.html',
      controller:function(){
        console.log('search..')
        angular.element('#container').addClass('animated slideInLeft')
      }
    })
})
