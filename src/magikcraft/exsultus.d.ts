declare namespace magikcraft {
    export namespace io {

        /**
         * Jump into the air.
         *
         * The power parameter is between 0 and 100 - it is a percentage of your maximum jumping power.
         *
         *
         * ```
         * const magik = magikcraft.io;
         *
         * function jump(power = 100) {
         *      magik.exsultus(power);
         * }
         * ```
         */
        export function exsultus(power: number): void;


    }
}