Meteor.startup(function () {
  if (Accounts.users.find().count() === 0) {
    Accounts.createUserWithPhone({
      phone: '+972501234567',
      profile: {
        name: 'My friend 1'
      }
    });

    Accounts.createUserWithPhone({
      phone: '+972501234568',
      profile: {
        name: 'My friend 2'
      }
    });

    Accounts.createUserWithPhone({
      phone: '+972501234569',
      profile: {
        name: 'My friend 3'
      }
    });
  }
});