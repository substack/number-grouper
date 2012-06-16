module.exports = function (n, opts) {
    if (!opts) opts = {};
    var radix = opts.radix || '.';
    var sep = opts.sep || ',';
    
    var parts = String(n).split('.');
    
    var integral = parts[0]
        .split('')
        .reverse()
        .join('')
        .replace(/(\d{3})/g, '$1' + sep)
        .split('')
        .reverse()
        .join('')
        .replace(new RegExp('^\\' + sep),'')
    ;
    if (parts[1] === undefined) return integral;
    return integral + radix + parts[1];
}
