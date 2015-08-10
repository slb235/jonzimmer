angular.module('app', ['onsen'])

.controller('JzCtrl', function ($scope, $http) {
  
  $scope.openRemote = function (scope, remote) {
    $scope.remote = $scope.commands[scope].remotes[remote];
    menu.setMainPage('remote.html', { closeMenu: true })
  }
  
  $scope.send = function(data) {
    $http.post('/execute', data).
    then(function (response) {
      console.log("success");
    }, function (response) {
      console.log("fail");
    });   
  }

  $scope.execute = function (category, command) {
    data = $scope.remote.categories[category].commands[command].execute;
    $scope.send({ remote: $scope.remote.remote, command: data });
  }
  
  $scope.commands = window.data;

  window.addEventListener('shake', function () { 
    $scope.send( { remote: 'special', command: 'random' } );
  }, false);
});