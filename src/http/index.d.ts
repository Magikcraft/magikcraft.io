declare namespace http {
    export function get(url: string): Object;
    export function post(url: string, data: Object): Object;
    export function post(url: string, data: any, contentType: string): Object;
}

declare module "http" {
    export = http;
}