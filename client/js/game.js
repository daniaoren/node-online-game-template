function preload () {
    game.load.image('logo', 'phaser.png');
}

function create () {
    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
}

function handleNetwork(socket) {
  socket.on('user info req', function() {
    socket.emit('user info', playerName );
  });
}