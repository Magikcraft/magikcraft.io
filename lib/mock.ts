import { BukkitBlock, BukkitBlockType, BukkitLocation, BukkitWorld, BukkitWorldBorder, ICanon, vector, BukkitPlayer } from '../typings';
declare const global: any;
declare const console: any;

global.Java = {
    type: (_type: string) => () => ({class: 'org.magikcraft.dummy'})
}
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
    displayLocalMsg: (msg) => console.log(msg),
    globalLocale: 'en-US',
    http: {},
    localiseMsg: (msg) => msg,
    log: console.log,
    magik: {},
    MSG: {},
    msg: (msg_id) => msg_id,
    plugin: {},
    sender: {}
}

class MockBlockType implements BukkitBlockType {
    private type: string;
    constructor(type: string) {
        this.type = type;
    }
    equals = (_type: any) =>  (this.type = _type);
}

class MockWorld implements BukkitWorld {
    private worldBorder = new MockWorldBorder();
    getBlockAt = (location: BukkitLocation) => new MockBlock('GRANITE');
    strikeLightning = () => {};
    spawnEntity = () => {};
    createExplosion = () => {};
    getWorldBorder = () => this.worldBorder;
    setWorldBorder = border => this.worldBorder = border;
}

class MockWorldBorder implements BukkitWorldBorder {
    private size = 60000000;
    private center;
    getSize = () => this.size;
    setSize = size => this.size = size;
    setCenter = (location) => this.center = location;
}

class MockBlock implements BukkitBlock {
    _type: any;
    constructor(_type: any) {
        this._type = new MockBlockType(_type)
    }
    location = new MockLocation();
    getRelative = () => this;
    getType = () => this._type;
    setType = (_type: any) => this._type = new MockBlockType(_type);
}

class MockVector implements vector {
    multiply = (v: number) => this;
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
    setX(x: number) {
        this.X = x;
    }
    getX = () => this.X;
    setY(y: number) {
        this.Y = y;
    }
    getY = () => this .Y;
    setZ(z: number) {
        this.Z = z;
    }
    getZ = () => this.Z;
    setPitch(p: number) {
        this.pitch = p;
    }
    getPitch = () => this.pitch;
    setYaw(y: number) {
        this.yaw = y;
    }
    getYaw = () => this.yaw;
    setWorld(w: any){
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