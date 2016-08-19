config.$inject = ['$routeProvider', '$locationProvider'];
function config($routeProvider, $locationProvider) {

// locationProvider allows us to use routes without hash params
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $routeProvider
    .when('/', {
      templateUrl: 'templates/main/index.html',
      controllerAs: 'postsIndexCtrl',
      controller: 'PostsIndexController'
    })
    // Routes to POST //
    .when('/posts', {
      templateUrl: 'templates/posts/index.html',
      controllerAs: 'postsIndexCtrl',
      controller: 'PostsIndexController'
    })
    .when('/posts/new', {
      templateUrl: 'templates/posts/new.html',
      controllerAs: 'postsNewCtrl',
      controller: 'PostsNewController'
    })
    .when('/posts/:id', {
      templateUrl: 'templates/posts/show.html',
      controllerAs: 'postsShowCtrl',
      controller: 'PostsShowController'
    })
    .when('/posts/:id/edit', {
      templateUrl: 'templates/posts/edit.html',
      controllerAs: 'postsEditCtrl',
      controller: 'PostsEditController'
    })
    .otherwise({redirectTo: '/'});
}
