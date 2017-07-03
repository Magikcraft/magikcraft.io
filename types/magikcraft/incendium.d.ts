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