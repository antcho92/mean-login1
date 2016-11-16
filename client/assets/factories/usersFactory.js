app.factory('usersFactory', ['$http', '$location', function($http, $location) {
  console.log('users factory loaded');
  function UsersFactory() {
    var self = this;
    this.index = function() {
      $http.get('/users').then(function(res) {
        console.log(res);
      });
    };
    this.register = function(newUser, callback) {
      $http.post('/users', newUser).then(function(res) {
        console.log(res.data);
        callback();
      });
    };
    this.login = function(userLogin, callback) {
      $http.post('/users/login', userLogin).then(function(res) {
        console.log(res);
        callback();
        $location.url('/dashboard')
      })
    };
    this.checkSess =function() {
      $http.get('/users/checkSess').then(function(data) {
        if (!data.data) {
          $location.url('/');
        } else {
          console.log(data);
          $location.url('/dashboard');
        }
      })
    }
  }
  console.log(new UsersFactory());
  return new UsersFactory();
}]);
