declare namespace magikcraft {
    export namespace io {
        /**
         * Teleport. Ianuae comes from Janus, the guardian of doorways. January is the gateway or entry to the year.
         *
         * Example:
         * Here is a spell that takes a location from your memory and teleports you there.
         * ```
         *  const magik = magikcraft.io;
         *
         * function teleport() {
         *      const where = magik.exmemento();
         *      magik.ianuae(where);
         * }
         * ```
         * Here is a more advanced version that assumes that your memory contains a dictionary of locations:
         * ```
         * const magik = magikcraft.io;
         * 
         * function tp(where = "default") {
         *      const memory = magik.exmemento();
         *      if (memory[where]) {
         *          magik.ianuae(memory[where]);
         *      } else {
         *          magik.dixit(`I don't remember ${where}!`);
         *      }
         * }
         * ```
         */
        export function ianuae(location: BukkitLocation): void;
    }
}