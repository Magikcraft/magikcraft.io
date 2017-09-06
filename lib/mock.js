"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
global.Java = {
    type: function (_type) { return function () { return ({ class: 'org.magikcraft.dummy' }); }; }
};
var nullfunc = function () { return null; };
global.magikcraft = {
    io: {
        getSender: function () {
            return "Default";
        },
        TextComponent: nullfunc,
        Bars: {
            addBar: nullfunc,
            setMessage: nullfunc,
            setColor: nullfunc,
            setStyle: nullfunc,
            setProgress: nullfunc,
            addPlayer: nullfunc,
            removePlayer: nullfunc,
            Color: {
                RED: 'RED'
            },
            Style: {
                NOTCHED_20: 'NOTCHED_20'
            }
        }
    }
};
exports.canon = {
    _darkmagik_: {},
    console: console,
    constant: {},
    displayLocalMsg: function (msg) { return console.log(msg); },
    globalLocale: 'en-US',
    http: {},
    localiseMsg: function (msg) { return msg; },
    log: console.log,
    magik: {},
    MSG: {},
    msg: function (msg_id) { return msg_id; },
    plugin: {},
    sender: {}
};
var MockBlockType = (function () {
    function MockBlockType(type) {
        var _this = this;
        this.equals = function (_type) { return (_this.type = _type); };
        this.type = type;
    }
    return MockBlockType;
}());
var MockWorld = (function () {
    function MockWorld() {
        var _this = this;
        this.worldBorder = new MockWorldBorder();
        this.getBlockAt = function (location) { return new MockBlock('GRANITE'); };
        this.strikeLightning = function () { };
        this.spawnEntity = function () { };
        this.createExplosion = function () { };
        this.getWorldBorder = function () { return _this.worldBorder; };
        this.setWorldBorder = function (border) { return _this.worldBorder = border; };
    }
    return MockWorld;
}());
var MockWorldBorder = (function () {
    function MockWorldBorder() {
        var _this = this;
        this.size = 60000000;
        this.getSize = function () { return _this.size; };
        this.setSize = function (size) { return _this.size = size; };
        this.setCenter = function (location) { return _this.center = location; };
    }
    return MockWorldBorder;
}());
var MockBlock = (function () {
    function MockBlock(_type) {
        var _this = this;
        this.location = new MockLocation();
        this.getRelative = function () { return _this; };
        this.getType = function () { return _this._type; };
        this.setType = function (_type) { return _this._type = new MockBlockType(_type); };
        this._type = new MockBlockType(_type);
    }
    return MockBlock;
}());
var MockVector = (function () {
    function MockVector() {
        var _this = this;
        this.multiply = function (v) { return _this; };
    }
    return MockVector;
}());
var MockLocation = (function () {
    function MockLocation() {
        var _this = this;
        this.X = 0;
        this.Y = 0;
        this.Z = 0;
        this.pitch = 0;
        this.yaw = 0;
        this.world = new MockWorld();
        this.block = new MockBlock('GRANITE');
        this.clone = function () { return _this; };
        this.getX = function () { return _this.X; };
        this.getY = function () { return _this.Y; };
        this.getZ = function () { return _this.Z; };
        this.getPitch = function () { return _this.pitch; };
        this.getYaw = function () { return _this.yaw; };
        this.getDirection = function () { return new MockVector(); };
        this.getWorld = function () { return _this.world; };
        this.getBlock = function () { return _this.block; };
    }
    MockLocation.prototype.setX = function (x) {
        this.X = x;
    };
    MockLocation.prototype.setY = function (y) {
        this.Y = y;
    };
    MockLocation.prototype.setZ = function (z) {
        this.Z = z;
    };
    MockLocation.prototype.setPitch = function (p) {
        this.pitch = p;
    };
    MockLocation.prototype.setYaw = function (y) {
        this.yaw = y;
    };
    MockLocation.prototype.setWorld = function (w) {
        this.world = w;
    };
    return MockLocation;
}());
// export const Block = new MockBlock('GRANITE');
exports.Player = {
    addPotionEffect: nullfunc,
    getFoodLevel: function () { return 3; },
    setFoodLevel: function (i) { },
    getWorld: function () { return new MockWorld(); },
    getName: function () { return 'MOCK_PLAYER'; },
    getLocation: function () { return new MockLocation(); },
    getEyeLocation: function () { return new MockLocation(); },
    getLineOfSight: function (blocks, maxDistance) { return [new MockBlock('GRANITE')]; },
    launchProjectile: function () { },
    isSneaking: function () { return true; }
};
