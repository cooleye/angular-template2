angular.module('app.homeModule',[
])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'index.home',
    url:'/home',
    css:'pages/home/home.css',
    templateUrl:'pages/home/home.html',
    controller:function($scope){
        console.log('home...')
        $scope.arr = [11,22,33,44,55]

    }
  })
  .state({
    name: 'index.home.part1',
    url: '/part1',
    css:'pages/home/home.part1/style.css',
    views: {
     'viewb': {
       templateUrl: 'pages/home/home.part1/home.part1.html',
       controller: ['$scope',
         function ($scope) {
            $scope.name = 'davie'
         }]
     }
   }
  })

})
