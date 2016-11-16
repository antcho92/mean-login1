app.controller('usersController', ['$scope', 'usersFactory', '$location', function($scope, uF, $location) {
  console.log('users function loaded');
  var self = this;
  this.register = function() {
    console.log(this.newUser);
    uF.register(this.newUser, function() {
      self.newUser = '';
    });
  };
  this.login = function() {
    console.log(this.userLogin);
    uF.login(this.userLogin, function() {
      self.userLogin = '';
    })
  };
  uF.checkSess();
}]);
