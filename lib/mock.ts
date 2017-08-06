import { BukkitBlock, BukkitBlockType, BukkitLocation, BukkitWorld, ICanon, vector, BukkitPlayer } from '../typings';
declare const global;

const nullfunc = () => null;

global.magikcraft = {
    io: {
        getSender: function() {
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

export const canon: ICanon = {
    _darkmagik_: {},
    console,
    constant: {},
    globalLocale: 'en-US',
    http: {},
    localiseMsg: {},
    log: console.log,
    magik: {},
    MSG: {},
    plugin: {},
    sender: {}
}

class MockBlockType implements BukkitBlockType {
    private type: string;
    constructor(type) {
        this.type = type;
    }
    equals = _type =>  (this.type = _type);
}

class MockWorld implements BukkitWorld {
    getBlockAt = (location: BukkitLocation) => new MockBlock('GRANITE');
    strikeLightning = () => {};
    spawnEntity = () => {};
    createExplosion = () => {};
}

class MockBlock implements BukkitBlock {
    _type;
    constructor(_type) {
        this._type = new MockBlockType(_type)
    }
    location = new MockLocation();
    getRelative = () => this;
    getType = () => this._type;
    setType = (_type) => this._type = new MockBlockType(_type);
}

class MockVector implements vector {
    multiply = (v) => v;
}

class MockLocation implements BukkitLocation {
    X = 0;
    Y = 0;
    Z = 0;
    pitch = 0;
    yaw = 0;
    world = new MockWorld();
    block = new MockBlock('GRANITE');

    constructor() {

    }
    clone = () => this;
    setX(x) {
        this.X = x;
    }
    getX = () => this.X;
    setY(y) {
        this.Y = y;
    }
    getY = () => this .Y;
    setZ(z) {
        this.Z = z;
    }
    getZ = () => this.Z;
    setPitch(p) {
        this.pitch = p;
    }
    getPitch = () => this.pitch;
    setYaw(y) {
        this.yaw = y;
    }
    getYaw = () => this.yaw;
    setWorld(w){
        this.world = w;
    }
    getDirection = () => new MockVector();
    getWorld = () => this.world;
    getBlock = () => this.block;
}

// export const Block = new MockBlock('GRANITE');

export const Player: BukkitPlayer = {
    addPotionEffect: nullfunc,
    getFoodLevel: () => 3,
    setFoodLevel: (i) => {},
    getWorld: () => new MockWorld(),
    getName: () => 'MOCK_PLAYER',
    getLocation: () => new MockLocation(),
    getEyeLocation: () => new MockLocation(),
    getLineOfSight: (blocks, maxDistance) => [new MockBlock('GRANITE')],
    launchProjectile: () => {},
    isSneaking: () => true
}