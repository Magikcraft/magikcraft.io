declare namespace magikcraft {
    export namespace io {

        /**
         * Memorize something for later. You have a single memory location that can store anything, including a dictionary-like object. This memory is wiped when you disconnect from the server.
         * 
         * Examples:
         *
         * Here is a simple example that allows you to remember the current location:
         * ```
         * const magik = magikcraft.io;
         *
         * function memorize() {
         *      const here = magik.hic();
         *      magik.memento(hic);
         * }
         * ```
         *
         * Here's a more advanced example that allows you to remember various locations:
         * ```
         * const magik = magikcraft.io;
         *
         * function memorize(name = "default") {
         *      const memory = magik.exmemento() || {};
         *      memory[name] = magik.hic();
         *      magik.memento(memory);
         * }
         */

        export function memento(thing: any): void;
    }
}