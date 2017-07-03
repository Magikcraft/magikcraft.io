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