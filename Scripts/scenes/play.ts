module scenes {
    export class Play extends objects.Scene {

private _background : objects.Background;
private _enemy : objects.Enemy;
public poof : objects.Poof;
public scorelabel : objects.Label;


        constructor() {
            super();
            this.start();
        }

        public start() : void {

            this.scorelabel = new objects.Label("Score: " + score, "Arial", "Yellow", 300, 200);
            this.addChild(this.scorelabel);
            this._background = new objects.Background("Background");
            this.addChild(this._background);
            
            this._enemy = new objects.Enemy("Enemy");
            this.addChild(this._enemy);

            this.poof = new objects.Poof("poof1");
            this.poof.active = false;
            stage.addChild(this.poof);

            this._enemy._poof = this.poof; 
            this._enemy._scene = this;

            stage.addChild(this);
            stage.cursor = 'none';
        }

        public update() : void {  
            this._enemy.update();    
        }

        private _onEnemyClick(event : createjs.MouseEvent) : void {
        }
    }
}