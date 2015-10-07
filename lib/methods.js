Meteor.methods({
  newMessage: function (message) {
    if (! this.userId) {
      throw new Meteor.Error('not-logged-in',
        'Must be logged in to send message.');
    }

    check(message, {
      text: String,
      chatId: String
    });

    message.timestamp = new Date();
    message.userId = this.userId;

    var messageId = Messages.insert(message);
    Chats.update(message.chatId, { $set: { lastMessage: message } });

    return messageId;
  },
  updateName: function (name) {
    if (! this.userId) {
      throw new Meteor.Error('not-logged-in',
        'Must be logged in to update his name.');
    }

    check(name, String);
    if (name.length === 0) {
      throw Meteor.Error('name-required', 'Must proive user name');
    }

    return Meteor.users.update(this.userId, { $set: { 'profile.name': name } });
  },
  newChat: function (otherId) {
    if (! this.userId) {
      throw new Meteor.Error('not-logged-in',
        'Must be logged to create a chat.');
    }

    check(otherId, String);

    var otherUser = Meteor.users.findOne(otherId);
    if (! otherUser) {
      throw new Meteor.Error('user-not-exists',
        'Chat\'s user not exists');
    }

    var chat = {
      userIds: [this.userId, otherId],
      createdAt: new Date()
    };

    var chatId = Chats.insert(chat);

    return chatId;
  },
});