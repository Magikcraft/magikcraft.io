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