declare namespace magikcraft {
    export namespace io {

        /**
         *
         * Recall your memory, which can be of any type, including a dictionary-like object.
         *
         * Examples:
         *
         * Here is a simple example that retrieves your memory:
         * ```
         * const magik = magikcraft.io;
         *
         * function remember() {
         *      const thing = magik.exmemento();
         *      magik.dixit(thing.toString());
         * }
         * ```
         *
         * Here's a more advanced example that retrieves memories by name, using a dictionary-like object:
         * ```
         * const magik = magikcraft.io;
         *
         * function remember(name = "default") {
         *      const memory = magik.exmemento() || {};
         *      if (memory[name]) {
         *          magik.dixit(memory[name]);
         *      } else {
         *          magik.dixit("I don't remember that!");
         *      }
         * }
         */

        export function exmemento(): any;
    }
}