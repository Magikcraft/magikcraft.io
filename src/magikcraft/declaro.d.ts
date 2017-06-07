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