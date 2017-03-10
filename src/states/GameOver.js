/// <reference path="../../node_modules/phaser/typescript/phaser.d.ts" />

class GameOver extends Phaser.State {

	create() {

	}

	restartGame() {
		this.game.state.start("Main");
	}

}

export default GameOver;
