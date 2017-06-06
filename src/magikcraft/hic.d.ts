declare namespace magikcraft {
    export namespace io {

        /**
         * Return a reference to the current location.
         * 
         * Example:
         * ```
         * const magik = magikcraft.io;
         * 
         * function where() {
         *      const here = magik.hic();
         *      magik.dixit(here);
         *      return here;
         * }
         * ```
         * 
         */
        function hic(): BukkitLocation;
    }
}