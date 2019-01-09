"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like = /** @class */ (function () {
    function Like(_likesCount) {
        var _this = this;
        this._likesCount = _likesCount;
        this.onClick = function () {
            _this._isSelected = !_this._isSelected;
            _this._likesCount += (_this._isSelected) ? +1 : -1;
        };
        this._isSelected = false;
    }
    Object.defineProperty(Like.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Like.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
