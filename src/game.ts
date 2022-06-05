import 'phaser';

export default class Demo extends Phaser.Scene
{
    constructor ()
    {
        super('demo');
    }

    preload ()
    {
        this.load.image('menu-background', 'assets/menu-background.jpg');
        this.load.image('start-button', 'assets/button-start-the-game.png');
    
    }

    create ()
    {
        
        const background = this.add.image( -110, 0, 'menu-background').setOrigin(0).setDepth(0);
        background.setScale(0.5, 0.55);
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, 'start-button')
          .setDepth(1);
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 400,
    height: 700,
    scene: Demo
};

const game = new Phaser.Game(config);
