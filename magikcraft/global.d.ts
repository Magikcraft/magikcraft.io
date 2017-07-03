declare namespace magikcraft {
    export namespace io {
        /**
         * Create a namespace called 'mct1'.
         *
         * Example:
         * ```
         *  const magik = magikcraft.io;
         *
         * function initialiseMCT1() {
         *      const mct1 = magik.global('mct1');
         *      mct1.state = {
         *          insulin: 0.4,
         *          bgl: 0.3
         *      }
         * }
         * ```
         */
        export function global(namespace: string): object;
    }
}