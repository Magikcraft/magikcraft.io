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