declare namespace magikcraft {
    export namespace io {        
        /**
         * Call the supplied task function the specified number of times. When finished, call the finished callback. Delay is the number of milliseconds between invocations of the task function.
         */
        export function doNTimes(task: Function, times: number, delay: number, finished?: Function): void;
    }
}