var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Enemy = (function (_super) {
        __extends(Enemy, _super);
        function Enemy(imageString) {
            _super.call(this, assets.getResult(imageString));
            this.on("mousedown", this.shot, this);
            this._randomize();
        }
        Object.defineProperty(Enemy.prototype, "life", {
            get: function () {
                return this._life;
            },
            enumerable: true,
            configurable: true
        });
        Enemy.prototype.update = function () {
            this._poof.update();
        };
        Enemy.prototype.setPosition = function (pos) {
            this.x = pos.x;
            this.y = pos.y;
        };
        Enemy.prototype.getPosition = function () {
            return new objects.Vector2(this.x, this.y);
        };
        Enemy.prototype.shot = function () {
            this._life--;
            console.log("bang");
            if (this._life <= 0) {
                console.log("dead");
                this._dead();
            }
        };
        Enemy.prototype._dead = function () {
            this._poof.active = true;
            this._poof.px = this.x;
            this._poof.py = this.y;
            this._poof.active = true;
            this._randomize();
            score += 5;
            //spawn death animation at current location and respawn with random life at new location
        };
        Enemy.prototype._randomize = function () {
            this._life = Math.floor(Math.random() * 5 + 1);
            this.x = Math.floor(Math.random() * 700 + 25);
            this.y = Math.floor(Math.random() * 500 + 25);
        };
        return Enemy;
    }(createjs.Bitmap));
    objects.Enemy = Enemy;
})(objects || (objects = {}));
//# sourceMappingURL=enemy.js.map