module objects {
    export class Poof extends createjs.Bitmap {

        public active: boolean;
        public anim: number;
        public tick: number;

        private s5: createjs.Bitmap;
        private s1: createjs.Bitmap;
        private s2: createjs.Bitmap;
        private s3: createjs.Bitmap;
        private s4: createjs.Bitmap;

        public px: number;
        public py: number;

        constructor(imageString: string) {
            console.log("poof created");
            super(assets.getResult(imageString));
            this.s1 = new createjs.Bitmap("../../Assets/images/poof1.png");
            this.s2 = new createjs.Bitmap("../../Assets/images/poof2.png");
            this.s3 = new createjs.Bitmap("../../Assets/images/poof3.png");
            this.s4 = new createjs.Bitmap("../../Assets/images/poof4.png");
            this.s5 = new createjs.Bitmap("../../Assets/images/poof5.png");
            this.tick = 0;
        }


        public update(): void {
            console.log(this.x, this.y);

        this.x = this.px;
        this.y = this.py;

            if (this.active == false) {
                console.log("poof reset");
                this.py = 5000;
                this.px = 5000;
            }

            if (this.active == true) {
                console.log("poof tick")
                this.tick += 0.5;

                if (this.tick > 0 && this.tick < 10) {
                    console.log("s1");
                    this.image = this.s1.image;
                }
                if (this.tick > 10 && this.tick < 20) {
                    console.log("s2");
                    this.image = this.s2.image;
                }
                if (this.tick > 20 && this.tick < 30) {
                    console.log("s3");
                    this.image = this.s3.image;
                }
                if (this.tick > 30 && this.tick < 40) {
                    console.log("s4");
                    this.image = this.s4.image;
                }
                if (this.tick > 40 && this.tick < 50) {
                    console.log("s5");
                    this.image = this.s5.image;
                }
                if (this.tick > 50) {
                    this.active = false;
                    this.tick = 0;
                    console.log("poof deactivate")
                }
            }

        }

    }

}