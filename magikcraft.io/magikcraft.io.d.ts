// Type definitions for magikcraft.io
// Project: https://github.com/Magikcraft/apidocs.git
// Definitions by: Josh Wulf <josh@magikcraft.io>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace magikcraft {

}
declare namespace http {
    function get(url: string): Object;
    function post(url: string, data: Object): Object;
    function post(url: string, data: any, contentType: string): Object;
}
/**
 * The eventbus is a global pub/sub system. It is useful for your own code, and it also the mechanism that allows your code to communicate with code that others are running on the server.
 * 
 * Use it to publish to a topic, and other players can consume the data by subscribing to the same topic.
 *
 */
declare namespace eventbus {
    export type MessageData = {
        data: string | Object;
        type: string;
    }

    /**
     * Your subscription callback function will receive a single parameter of type `MessageData`.
     */
    export type SubscriptionCallback = (message: MessageData) => void;

    export interface Subscription {
        /**
         * Cancel the subscription. This stops your callback from being triggered when this topic is published.
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
    export function subscribe(topic: string, callback: SubscriptionCallback): Subscription;


    /**
     * Publish to a topic. You can publish a string, or a JSON Object.
     * 
     * ```
     * eventbus.publish('sitapati.messages', 'Hope everyone is feeling fabulous today!');
     * 
     * eventbus.publish('sitapati.messages', {data: 'You can also publish JSON objects', moredata: 'The consumer should check the data type in their subscription'});
     * ```
     * 
     */
    export function publish(topic: string, data: string | Object);

    /**
     * To cancel a subscription, you call the `cancel()` method of the subscription object returned from `eventbus.subscribe()`. However, sometimes you lose the reference to that object - or you want to unsubscribe a bunch of listeners all at once.
     * 
     * In this case, you can use `eventbus.unsubscribeFromTopic()`. You specify which topic you want to unsubscribe from, and all your subscriptions to that topic will be cancelled.
     * 
     * This does not unsubscribe anyone else - just your subscriptions.
     * 
     * ```
     * // Subscribe without getting a reference to the subscription
     * eventbus.subscribe('magikcraft.news', news => magik.dixit(news.data));
     * ...
     * // Somewhere else, we don't have a subscription to cancel, but we can cancel all subscriptions to that topic:
     * eventbus.unsubscribeFromTopic('magikcraft.news');
     * ```
     */
    export function unsubscribeFromTopic(topic: string): boolean;

    /**
     * Sometimes, things get real messed up and you just need to hit the reset button.
     * 
     * You can quit from the server and rejoin, and this will clear all your eventbus subscriptions. 
     * 
     * You can also call `eventbus.cancelAllSubscriptions()`. This will cancel all subscriptions you have created for all topics.
     * 
     */
    export function cancelAllSubscriptions(): boolean;
}

declare namespace magikcraft {
    export namespace io {
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
            export function aspecto(): BukkitLocation;
    }
}
declare namespace magikcraft {
    export namespace io {
        /**
         * The caldarium function takes an array of ingredients and returns a secret. Sometimes it's a new function name, sometimes it's a clue.
         *
         * Example:
         *```
         *const magik = magikcraft.io;
         *
         * function pot() {
         * 
         * }
         *``` 
         */
        export function caldarium(ingredientsList: string[]): string;

    }
}
declare namespace magikcraft {
    export namespace io {

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
        export function declaro(item: string): void;

    }
}
declare namespace magikcraft {
    export namespace io {
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
        export function dixit(message: string, playername?: string): void;
    }
}
declare namespace magikcraft {
    export namespace io {
        /**
         * Call a task function the specified number of times. When finished, optionally execute a callback function. Delay is the number of milliseconds between invocations of the task function.
         * 
         * Example:
         * 
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
        export function doNTimes(task: Function, times: number, delay: number, callback?: Function): void;
    }
}
declare namespace magikcraft {
    export namespace io {

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

        export function exmemento(): any;
    }
}
declare namespace magikcraft {
    export namespace io {

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
        export function exsultus(power: number): void;
    }
}
declare namespace magikcraft {
    export namespace io {
       /**
         * Return a reference to the current player Bukkit API object.
         * On Magikcraft campaign servers this will return null if you do not have sufficient permissions.
         * On Magikcraft Open Source Platform servers this always returns a reference to the player Bukkit API object.
         *
         */
        export function getSender(): BukkitPlayer;
    }
}

declare namespace magikcraft {
    export namespace io {
        /**
         * Create a namespace called 'mct1'.
         *
         * Example:
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
        export function global(namespace: string): object;
    }
}
declare namespace magikcraft {
    export namespace io {

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
        function hic(): BukkitLocation;
    }
}
declare namespace magikcraft {
    export namespace io {
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
        export function iacta(playername: string): void;
    }
}
declare namespace magikcraft {
    export namespace io {
        /**
         * Teleport. Ianuae comes from Janus, the guardian of doorways. January is the gateway or entry to the year.
         *
         * Example:
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
        export function ianuae(location: BukkitLocation): void;
    }
}
declare namespace magikcraft {
    export namespace io {
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
        export function incendium(playername: string): void;
    }
}
declare namespace magikcraft {
    export namespace io {
        export interface BukkitLocation {
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

        export interface vector {
            multiply(num: number): vector;
        }

        export interface BukkitWorld {
            getBlockAt(location: BukkitLocation): BukkitBlock;
            strikeLightning(location: BukkitLocation);
            spawnEntity(location: BukkitLocation, entityType: any);
            createExplosion(location: BukkitLocation, times: number);
        }

        export interface BukkitBlock {
            location: BukkitLocation;
            getType(): BukkitBlockType;
            getRelative(x: number, y: number, z: number): BukkitBlock;
            setType(newType: BukkitBlockType): void;
        }

        export interface BukkitBlockType {
            equals(comparison: any): boolean;
        }

        export interface BukkitPlayer {
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

        export type BukkitMaterial = any;

        export type JavaType = any;

        /**
         * Return a Java class reference to an org.bukkit.* class.
         * 
         * Refer to the Bukkit API documentation at https://bukkit.magikcraft.io.
         *
        *
        */
        export function type(classname: string): JavaType;

        export type BukkitPlugin = any;

        /**
         * Return a reference to the Magikcraft Bukkit Plugin
         *
         */
        export function getPlugin(): BukkitPlugin;

        /**
        * Execute the callback function once, after the delay in milliseconds
        **/
        export function setTimeout(callback: Function, delay: number): number;
        /**
        * Execute the callback function multiple times, after the delay in milliseconds. Returns a handler that can be used to clear the interval timer.
        **/
        export function setInterval(callback: Function, delay: number): number;
        /**
        * Clear the interval timer.
        **/
        export function clearInterval(handle: number): void;

        /**
         * User interface bars. These use BossBarAPI.
         */
        export const Bars: BossBarAPI;

        export interface BossBarAPI {
            addBar(
                player: BukkitPlayer,
                text: TextComponent,
                color: BarsColor,
                style: BarsStyle,
                progress: number
            ): BossBar;
            getBossBars(): BossBar[];
            addBarForPlayer(player: BukkitPlayer, bossBar: BossBar): void;
            removeBarForPlayer(player: BukkitPlayer, bossBar: BossBar): void;

            Color: BarsColor;
            Style: BarsStyle;
        }

        export interface BossBar {
            addPlayer(player: BukkitPlayer): void;
            removePlayer(player: BukkitPlayer): void;
            getColor(): BarsColor;
            getStyle(): BarsStyle;
            setProperty(property: any, flag: boolean);
            getMessage(): string;
            setVisible(flag: boolean);
            isVisible(): boolean;
            getProgress(): number;
            setProgress(progress: number): void;
        }
        export interface BarsColor {
            readonly PINK;
            readonly RED;
            readonly GREEN;
            readonly BLUE;
            readonly YELLOW;
            readonly PURPLE;
            readonly WHITE;
        }

        export interface BarsStyle {
            readonly PROGRESS;
            readonly NOTCHED_6;
            readonly NOTCHED_10;
            readonly NOTCHED_12;
            readonly NOTCHED_20;
        }

        export class TextComponent {
            constructor(text: string);
        }
    }
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
    export function type(classname: string): any;
}
declare namespace magikcraft {
    export namespace io {
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
        export function infierno(): void;
    }
}
declare namespace magikcraft {
    export namespace io {

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

        export function memento(thing: any): void;
    }
}
declare namespace magikcraft {
    export namespace io {
        /**
         * Make another player radioactive.
         *
         * Example:
         * ```
         * const magik = magikcraft.io;
         *
         * function radiate(name: string) {
         *      magik.radiatum(name);
         * }
         */
        export function radiatum(playername: string): void;
    }
}
declare namespace magikcraft {
    export namespace io {
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
        export function random(min: number, max: number): number;
    }
}
declare namespace magikcraft {
    export namespace io {
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
        export function satio(): void;
    }
}
declare namespace magikcraft {
    export namespace io {
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
        export function shakti(location?: BukkitLocation): void;
    }
}

declare namespace magikcraft {
    export namespace io {
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
        export function stella(location: BukkitLocation): void;
    }
}
declare namespace magikcraft {
    export namespace io {


    }
}
declare namespace magikcraft {
    export namespace io {

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

        function volare(duration?: number): void;
    }
}
