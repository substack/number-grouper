module.exports = function (n, opts) {
    if (!opts) opts = {};
    var radix = opts.radix || '.';
    var mark = opts.mark || ',';
    
    return String(n)
        .replace(/\./, radix)
        .split('')
        .reverse()
        .join('')
        .replace(/(\d{3})/g, '$1' + mark)
        .split('')
        .reverse()
        .join('')
        .replace(new RegExp('^\\' + mark),'')
    ;
}
