import { Scene } from 'phaser';

export default class MenuScene extends Scene {
  constructor() {
    super('menu');
  }
  
  preload() {
    this.load.image('menu-background', 'assets/menu-background.jpg');
    this.load.image('start-button', 'assets/button-start-the-game.png');
  }
  
  create() {
    this.add.image( -110, 0, 'menu-background')
      .setOrigin(0)
      .setDepth(0)
      .setScale(0.5, 0.55);
    this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, 'start-button')
      .setDepth(1);
  }
}

