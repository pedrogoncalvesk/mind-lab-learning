
export function serialize(data) {
    if (typeof(data) != 'object') {
        return '?' + data;
    }
    var str = [];
    for (var p in data) {
        if (data[p] && data.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(data[p]));
        }
    }
    return '?' + str.join('&');
}

export function getPathParam() {
    const args = arguments;
    const params = [];

    for (let a in args) {
        params.push(args[a]);
    }
    return params.join('/');
}