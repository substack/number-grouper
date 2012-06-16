module.exports = function (n, opts) {
    if (!opts) opts = {};
    var radix = opts.radix || '.';
    var mark = opts.mark || ',';
    
    var parts = String(n).split('.');
    
    var integral = parts[0]
        .split('')
        .reverse()
        .join('')
        .replace(/(\d{3})/g, '$1' + mark)
        .split('')
        .reverse()
        .join('')
        .replace(new RegExp('^\\' + mark),'')
    ;
    if (parts[1] === undefined) return integral;
    return integral + radix + parts[1];
}
