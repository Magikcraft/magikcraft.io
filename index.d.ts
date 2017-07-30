// Type definitions for magikcraft.io 0.9
// Project: https://github.com/Magikcraft/magikcraft.io
// Definitions by: Josh Wulf <josh@magikcraft.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

type TextComponent = any;

export interface ICanon {
    sender: any,
    plugin: any;
    magik: any,
    constant: any;
    console: any;
    globalLocale: string,
    http: any;
}
interface BukkitLocation {
    setX(x: number): void;
    setY(y: number): void;
    setZ(z: number): void;
    setPitch(pitch: number): void;
    setYaw(yaw: number): void;
    setWorld(world: any): void;

    getX(): number;
    getY(): number;
    getZ(): number;
    getYaw(): number;
    getPitch(): number;
    getWorld(): BukkitWorld;
    getBlock(): BukkitBlock;
    getDirection(): vector;

    clone(): BukkitLocation;
}

interface vector {
    multiply(num: number): vector;
}

interface BukkitWorld {
    getBlockAt(location: BukkitLocation): BukkitBlock;
    strikeLightning(location: BukkitLocation): void;
    spawnEntity(location: BukkitLocation, entityType: any): void;
    createExplosion(location: BukkitLocation, times: number): void;
}

interface BukkitBlock {
    location: BukkitLocation;
    getType(): BukkitBlockType;
    getRelative(x: number, y: number, z: number): BukkitBlock;
    setType(newType: BukkitBlockType): void;
}

interface BukkitBlockType {
    equals(comparison: any): boolean;
}

interface BukkitPlayer {
    addPotionEffect(effect: any): void;
    getFoodLevel(): number;
    setFoodLevel(level: number): void;
    getWorld(): BukkitWorld;
    getName(): string;
    getLocation(): BukkitLocation;
    getEyeLocation(): BukkitLocation;
    getLineOfSight(blocks: BukkitMaterial[], maxDistance: number): BukkitBlock[];
    launchProjectile(projectileType: any): void;
    isSneaking(): boolean;
}

type BukkitPlugin = any;

type BukkitMaterial = any;

type JavaType = any;

interface BossBarAPI {
    addBar(
        player: BukkitPlayer,
        text: TextComponent,
        color: BarsColor,
        stinterfaceyle: BarsStyle,
        progress: number
    ): BossBar;
    getBossBars(): BossBar[];
    addBarForPlayer(player: BukkitPlayer, bossBar: BossBar): void;
    removeBarForPlayer(player: BukkitPlayer, bossBar: BossBar): void;

    Color: BarsColor;
    Style: BarsStyle;
}

interface BossBar {
    addPlayer(player: BukkitPlayer): void;
    removePlayer(player: BukkitPlayer): void;
    getColor(): BarsColor;
    setColor(color: BarsColor): void;
    getStyle(): BarsStyle;
    setStyle(style: BarsStyle): void;
    setProperty(property: any, flag: boolean): void;
    getMessage(): string;
    setMessage(msg: string): void;
    setVisible(flag: boolean): void;
    isVisible(): boolean;
    getProgress(): number;
    setProgress(progress: number): void;
}
interface BarsColor {
    readonly PINK: any;
    readonly RED: any;
    readonly GREEN: any;
    readonly BLUE: any;
    readonly YELLOW: any;
    readonly PURPLE: any;
    readonly WHITE: any;
}

interface BarsStyle {
    readonly PROGRESS: any;
    readonly NOTCHED_6: any;
    readonly NOTCHED_10: any;
    readonly NOTCHED_12: any;
    readonly NOTCHED_20: any;
}
interface magik {
    /**
     * Return a Java class reference to an org.bukkit.* class.
     *
     * Refer to the Bukkit API documentation at https://bukkit.magikcraft.io.
     */
    type(classname: string): JavaType;

    /**
     * Return a reference to the Magikcraft Bukkit Plugin
     *
     */
    getPlugin(): BukkitPlugin;

    TextComponent(label: string): TextComponent;

    /**
     * Execute the callback function once, after the delay in milliseconds
     *
     * @export
     * @param {() => void} callback
     * @param {number} delay
     * @returns {number}
     */
    setTimeout(callback: () => void, delay: number): number;

    /**
     * Execute the callback function multiple times, after the delay in milliseconds.
     * Returns a handle that can be used to clear the interval timer.
     *
     * @export
     * @param {() => void} callback
     * @param {number} delay
     * @returns {number}
     */
    setInterval(callback: () => void, delay: number): number;
    /**
     * Clear the interval timer.
     */
    clearInterval(handle: number): void;

    /**
     * User interface bars. These use BossBarAPI.
     */
    Bars: BossBarAPI;

    /**
     * Volare means to fly. This has you float up into the air.
     * Be careful, because you will take damage if you fall on the ground. Landing in water causes no damage.
     *
     * Example:
     * ```
     * const magik = magikcraft.io;
     *
     * function fly() {
     *      magik.volare();
     * }
     * ```
     */
    volare(duration?: number): void;

    /**
     *
     * Return a reference to where you are looking.
     *
     * Example:
     *
     * Here's a spell that teleports you to where you are looking.
     * ```
     * const magik = magikcraft.io;
     *
     * function blink() {
     *      const there = magik.aspecto();
     *      magik.ianuae(there);
     * }
     * ```
     */
    aspecto(): BukkitLocation;

    /**
     * The caldarium function takes an array of ingredients and returns a secret. Sometimes it's a new function name, sometimes it's a clue.
     *
     * Example:
     * ```
     * const magik = magikcraft.io;
     *
     * function pot() {
     *
     * }
     * ```
     */
    caldarium(ingredientsList: string[]): string;

    /**
     *  Launch a firework.
     *
     * Example:
     * This spell will launch a firework where you are looking.
     * ```
     * const magik = magikcraft.io;
     *
     * function rocket() {
     *      const there = magik.aspecto();
     *      magik.stella(there);
     * }
     * ```
     */
    stella(location: BukkitLocation): void;

    /**
     * Declaro - to manifest (to make clear, to bring into clarity). Manifests an item in Minecraft.
     *
     * The argument is a special code that can be found from clues in the Magikcraft universe.
     *
     * Example:
     * Here is how you get an elytra:
     * ```
     * const magik = magikcraft.io;
     *
     * function magik_carpet() {
     *      magik.declaro('elytra');
     * }
     * ```
     */
    declaro(item: string): void;

    /**
     *
     * Strike lightning.
     *
     * Defaults to where you are looking if you do not specify a location.
     *
     * Example:
     * ```
     * const magik = magikcraft.io;
     *
     * function lightning() {
     *      magik.shakti();
     * }
     * ```
     */
    shakti(location?: BukkitLocation): void;

    /**
     * Satio feeds you with magik, giving you a full health bar.
     *
     * Example:
     *
     * ```
     * function feedme() {
     *      magik.satio();
     * }
     * ```
     */
    satio(): void;

    /**
     * Generate and return a random number.
     *
     * Example:
     *
     * Here's a spell that rolls a die and produces a random number.
     * ```
     * const magik = magikcraft.io;
     *
     * function rollDie(sides = 6) {
     *      const dieroll = magik.random(1, sides);
     *      magik.dixit(`You rolled:  ${dieroll}`);
     *      return dieroll;
     * }
     * ```
     */
    random(min: number, max: number): number;

    /**
     * Return a reference to the current player Bukkit API object.
     * On Magikcraft campaign servers this will return null if you do not have sufficient permissions.
     * On Magikcraft Open Source Platform servers this always returns a reference to the player Bukkit API object.
     *
     */
    getSender(): BukkitPlayer;

    /**
     * Dixit prints a message out to the user's Minecraft console. It's useful for debugging.
     * This is the equivalent of `console.log`.
     * You can send a message to another user by passing their name as the optional second argument.
     *
     * Example:
     * ```
     *  const magik = magikcraft.io;
     *
     * function say(msg="Hello world!") {
     *      magik.dixit(msg);
     * }
     * ```
     */
    dixit(message: string, playername?: string): void;

    /**
     * Call a task function the specified number of times. When finished, optionally execute a callback function. Delay is the number of milliseconds between invocations of the task function.
     *
     * Example:
     * This spell will have you jump multiple times in a row, to get extra height. Be careful though - jump too high and you'll hurt yourself if you fall!
     * ```
     * const magik = magikcraft.io;
     *
     * function multiJump(times = 2) {
     *      magik.doNTimes(exsultus, times, 1000);
     * }
     * ```
     *
     * Here is a version with a callback function that executes when it is finished:
     * ```
     * const magik = magikcraft.io;
     *
     * function mj(times = 2, delay = 1000) {
     *      magik.doNTimes(exsultus, times, delay, () => magik.dixit("Done!"));
     * }
     * ```
     */
    doNTimes(task: () => void | any, times: number, delay: number, callback?: () => void | any): void;

    /**
     * Jump into the air.
     *
     * The power parameter is between 0 and 100 - it is a percentage of your maximum jumping power.
     *
     * Example:
     * ```
     * const magik = magikcraft.io;
     *
     * function jump(power = 100) {
     *      magik.exsultus(power);
     * }
     * ```
     */
    exsultus(power: number): void;

    /**
     *
     * Recall your memory, which can be of any type, including a dictionary-like object.
     *
     * Examples:
     *
     * Here is a simple example that retrieves your memory:
     * ```
     * const magik = magikcraft.io;
     *
     * function remember() {
     *      const thing = magik.exmemento();
     *      magik.dixit(thing.toString());
     * }
     * ```
     *
     * Here's a more advanced example that retrieves memories by name, using a dictionary-like object:
     * ```
     * const magik = magikcraft.io;
     *
     * function remember(name = "default") {
     *      const memory = magik.exmemento() || {};
     *      if (memory[name]) {
     *          magik.dixit(memory[name]);
     *      } else {
     *          magik.dixit("I don't remember that!");
     *      }
     * }
     */

    exmemento(): any;

    /**
     * Create a global namespace. Use this to maintain state.
     *
     * Example:
     * Create a namespace called 'mct1'.
     * ```
     *  const magik = magikcraft.io;
     *
     * function initialiseMCT1() {
     *      const mct1 = magik.global('mct1');
     *      mct1.state = {
     *          insulin: 0.4,
     *          bgl: 0.3
     *      }
     * }
     * ```
     */
    global(namespace: string): object;

    /**
     * Return a reference to the current location.
     *
     * Example:
     * ```
     * const magik = magikcraft.io;
     *
     * function where() {
     *      const here = magik.hic();
     *      magik.dixit(here);
     *      return here;
     * }
     * ```
     *
     */
    hic(): BukkitLocation;

    /**
     * Toss another player. Iacta gives us "eject" in English.
     *
     * Example:
     * ```
     *  const magik = magikcraft.io;
     *
     * function toss(playername) {
     *      magik.iacta(playername);
     * }
     * ```
     */
    iacta(playername: string): void;

    /**
     * Teleport. Ianuae comes from Janus, the guardian of doorways. January is the gateway or entry to the year.
     *
     * Examples:
     * Here is a spell that takes a location from your memory and teleports you there.
     * ```
     *  const magik = magikcraft.io;
     *
     * function teleport() {
     *      const where = magik.exmemento();
     *      magik.ianuae(where);
     * }
     * ```
     * Here is a more advanced version that assumes that your memory contains a dictionary of locations:
     * ```
     * const magik = magikcraft.io;
     *
     * function tp(where = "default") {
     *      const memory = magik.exmemento();
     *      if (memory[where]) {
     *          magik.ianuae(memory[where]);
     *      } else {
     *          magik.dixit(`I don't remember ${where}!`);
     *      }
     * }
     * ```
     */
    ianuae(location: BukkitLocation): void;

    /**
     * Set another player on fire.
     *
     * Example:
     * ```
     * const magik = magikcraft.io;
     *
     * function ignite(name: string) {
     *      magik.incendium(name);
     * }
     */
    incendium(playername: string): void;

    /**
     * Memorize something for later. You have a single memory location that can store anything, including a dictionary-like object. This memory is wiped when you disconnect from the server.
     *
     * Examples:
     *
     * Here is a simple example that allows you to remember the current location:
     * ```
     * const magik = magikcraft.io;
     *
     * function memorize() {
     *      const here = magik.hic();
     *      magik.memento(hic);
     * }
     * ```
     *
     * Here's a more advanced example that allows you to remember various locations:
     * ```
     * const magik = magikcraft.io;
     *
     * function memorize(name = "default") {
     *      const memory = magik.exmemento() || {};
     *      memory[name] = magik.hic();
     *      magik.memento(memory);
     * }
     */

    memento(thing: any): void;

    /**
     * Shoot a fireball.
     *
     * Example:
     * ```
     *  const magik = magikcraft.io;
     *
     * function fireball() {
     *      magik.infierno();
     * }
     * ```
     */
    infierno(): void;
}

declare namespace http {

    /**
     * HTTP GET a resource from a URL
     *
     * @param {string} url
     * @returns {*}
     */
    function get(url: string): any;
    function post(url: string, data: any, contentType?: string): any;
}
/**
 * The eventbus is a global pub/sub system. It is useful for your own code, and it also the mechanism that allows your code to communicate with code that others are running on the server.
 *
 * Use it to publish to a topic, and other players can consume the data by subscribing to the same topic.
 *
 */
declare namespace eventbus {
    interface MessageData {
        data: string | object;
        type: string;
    }

    /**
     * Your subscription callback function will receive a single parameter of type `MessageData`.
     */
    type SubscriptionCallback = (message: MessageData) => void;

    interface Subscription {
        /**
         * Cancel the subscription. This stops your callback from being triggered when this topic is published.
         *
         * Example:
         * ```
         * const mysub = eventbus.subscribe('sitapati.highscore', (score) => {
         *      if (score === "-1") {
         *          return mysub.cancel(); // Stop listening to this topic.
         *      }
         *      magik.dixit(`High score is ${score`);
         * });
         * ```
         * @memberof Subscription
         */
        cancel(): void;
    }
    /**
     * Subscribe to a topic on the eventbus.
     * Topic names are arbitrary, and the topic namespace is global, so you probably want to namespace your topics, for example by using your username, like: 'sitapati.myTopic'
     *
     * Example:
     * ```
     * const sub = eventbus.subscribe('sitapati.messages', (msg) => {
     *      if (msg.type === "string") {
     *          magik.dixit(msg.data);
     *      }
     *      if (msg.type === "json") {
     *          magik.dixit(Object.keys(msg.data).toString());
     *      }
     * });
     * ```
     */
    function subscribe(topic: string, callback: SubscriptionCallback): Subscription;

    /**
     * Publish to a topic. You can publish a string, or a JSON Object.
     *
     * Example:
     * ```
     * eventbus.publish('sitapati.messages', 'Hope everyone is feeling fabulous today!');
     *
     * eventbus.publish('sitapati.messages', {data: 'You can also publish JSON objects', moredata: 'The consumer should check the data type in their subscription'});
     * ```
     *
     */
    function publish(topic: string, data: string | object): void;

    /**
     * To cancel a subscription, you call the `cancel()` method of the subscription object returned from `eventbus.subscribe()`.
     * However, sometimes you lose the reference to that object - or you want to unsubscribe a bunch of listeners all at once.
     *
     * In this case, you can use `eventbus.unsubscribeFromTopic()`.
     * You specify which topic you want to unsubscribe from, and all your subscriptions to that topic will be cancelled.
     *
     * This does not unsubscribe anyone else - just your subscriptions.
     *
     * Example:
     * ```
     * // Subscribe without getting a reference to the subscription
     * eventbus.subscribe('magikcraft.news', news => magik.dixit(news.data));
     * ...
     * // Somewhere else, we don't have a subscription to cancel, but we can cancel all subscriptions to that topic:
     * eventbus.unsubscribeFromTopic('magikcraft.news');
     * ```
     */
    function unsubscribeFromTopic(topic: string): boolean;

    /**
     * Sometimes, things get real messed up and you just need to hit the reset button.
     *
     * You can quit from the server and rejoin, and this will clear all your eventbus subscriptions.
     *
     * You can also call `eventbus.cancelAllSubscriptions()`. This will cancel all subscriptions you have created for all topics.
     *
     */
    function cancelAllSubscriptions(): boolean;
}

/**
 * Access underlying Java classes.
 *
 * @interface Java
 *
 */
declare namespace Java {
    /**
     *
     * Return a reference to a Java class. In the Nashorn JavaScript engine you can instantiate Java class instances and get a JavaScript reference to them.
     *
     * Example:
     * ```
     *
     * ```
     */
    function type(classname: string): any;
}

declare const magikcraft: {io: magik};

// export { };
