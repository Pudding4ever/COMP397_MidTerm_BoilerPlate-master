var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Crosshair = (function (_super) {
        __extends(Crosshair, _super);
        function Crosshair(imageString) {
            _super.call(this, assets.getResult(imageString));
        }
        Object.defineProperty(Crosshair.prototype, "life", {
            get: function () {
                return this._life;
            },
            enumerable: true,
            configurable: true
        });
        Crosshair.prototype.update = function () {
        };
        Crosshair.prototype.setPosition = function (pos) {
            this.x = pos.x;
            this.y = pos.y;
        };
        Crosshair.prototype.getPosition = function () {
            return new objects.Vector2(this.x, this.y);
        };
        return Crosshair;
    }(createjs.Bitmap));
    objects.Crosshair = Crosshair;
})(objects || (objects = {}));
//# sourceMappingURL=crosshair.js.map