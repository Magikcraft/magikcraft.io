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
