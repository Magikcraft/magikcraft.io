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