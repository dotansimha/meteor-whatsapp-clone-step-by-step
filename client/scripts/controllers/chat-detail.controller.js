angular
  .module('Whatsapp')
  .controller('ChatDetailCtrl', ChatDetailCtrl);

function ChatDetailCtrl ($scope, $stateParams) {
  var chatId = $stateParams.chatId;
  $scope.chat = $scope.$meteorObject(Chats, chatId, false);
}