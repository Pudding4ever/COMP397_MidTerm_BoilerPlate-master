module objects {
    export class Enemy extends createjs.Bitmap {

        private _move : objects.Vector2;
        private _speed : number;

        public _scene : objects.Scene;

        private _life : number;
        
        public _poof : objects.Poof;

        // public variables
        public name:string;
        public width:number;
        public height:number;
        public center:objects.Vector2;

        constructor(imageString:string) {
            super(assets.getResult(imageString));
            this.on("mousedown", this.shot, this);
            this._randomize();
        }

        get life() : number {
            return this._life;
        }

        public update() : void {
            this._poof.update();
        }

        public setPosition(pos : objects.Vector2) : void {
            this.x = pos.x;
            this.y = pos.y;
        }

        public getPosition() : objects.Vector2 {
            return new objects.Vector2(this.x, this.y);
        }

        public shot() : void {
            this._life--;
            console.log("bang");
            if(this._life <= 0)
            {
                console.log ("dead");
                this._dead();
            }
        }

        private _dead() : void {
            this._poof.active = true;
            this._poof.px = this.x;
            this._poof.py = this.y;
            this._poof.active = true;
            this._randomize();
            score += 5;
            //spawn death animation at current location and respawn with random life at new location
        }

        private _randomize() : void

        {
            this._life = Math.floor(Math.random() * 5 + 1);
            this.x = Math.floor(Math.random() * 700 + 25);
            this.y = Math.floor(Math.random() * 500 + 25);
        }


    }
}