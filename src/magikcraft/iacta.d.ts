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