angular
  .module('Whatsapp')
  .controller('ChatsCtrl', ChatsCtrl);

function ChatsCtrl ($scope) {
  $scope.chats = $scope.$meteorCollection(Chats, false);
  $scope.remove = remove;

  ////////////

  function remove (chat) {
    $scope.chats.splice($scope.chats.indexOf(chat), 1);
  }
}