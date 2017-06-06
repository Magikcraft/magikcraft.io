declare namespace magikcraft {
    export namespace io {
        /**
         * Call a task function the specified number of times. When finished, optionally execute a callback function. Delay is the number of milliseconds between invocations of the task function.
         * 
         * Example:
         * 
         * This spell will have you jump multiple times in a row, to get extra height. Be careful though - jump too high and you'll hurt yourself if you fall!
         * ```
         * const magik = magikcraft.io;
         * 
         * function multiJump(times = 2) {
         *      magik.doNTimes(exsultus, times, 1000);
         * }
         * ```
         * 
         * Here is a version with a callback function that executes when it is finished:
         * ```
         * const magik = magikcraft.io;
         * 
         * function mj(times = 2, delay = 1000) {
         *      magik.doNTimes(exsultus, times, delay, () => magik.dixit("Done!"));
         * }
         * ```
         */
        export function doNTimes(task: Function, times: number, delay: number, callback?: Function): void;
    }
}