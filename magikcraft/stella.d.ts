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