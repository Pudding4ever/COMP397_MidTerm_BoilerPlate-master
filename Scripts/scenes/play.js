var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        function Play() {
            _super.call(this);
            this.start();
        }
        Play.prototype.start = function () {
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
        };
        Play.prototype.update = function () {
            this._enemy.update();
        };
        Play.prototype._onEnemyClick = function (event) {
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map