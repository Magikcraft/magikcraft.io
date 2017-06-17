declare namespace http {
    function get(url: string): Object;
    function post(url: string, data: Object): Object;
    function post(url: string, data: any, contentType: string): Object;
}