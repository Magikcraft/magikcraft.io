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