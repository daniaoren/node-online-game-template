function Game() { 
}

function preload () {

    game.load.image('logo', 'phaser.png');
}

function create () {

    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);

}

function handleNetwork(socket) {
  console.log('Game connection process here');
  console.log(socket);
  // This is where you receive all socket messages
}

function handleLogic() {
  console.log('Game is running');
  // This is where you update your game logic
}

function handleGraphics(gfx) {
  // This is where you draw everything
  // gfx.fillStyle = '#fbfcfc';
  // gfx.fillRect(0, 0, screenWidth, screenHeight);

  // gfx.fillStyle = '#2ecc71';
  // gfx.strokeStyle = '#27ae60';
  // gfx.font = 'bold 50px Verdana';
  // gfx.textAlign = 'center';
  // gfx.lineWidth = 2;
  // gfx.fillText('Now playing...', screenWidth / 2, screenHeight / 2);
  // gfx.strokeText('Now playing...', screenWidth / 2, screenHeight / 2);
}
