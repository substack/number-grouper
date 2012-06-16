number-grouper
==============

Render numbers as 3-digit separated groups.

example
=======

``` js
var grouper = require('number-grouper');
var s = grouper(1234567890);
console.log(s);
```

***

```
$ node example/group.js
1,234,567,890
```

methods
=======

``` js
var grouper = require('number-grouper')
```

grouper(n, opts={sep:',',radix:'.'})
------------------------------------

Convert the number `n` into a string with 3-digit groups separated by
`opts.sep`.

If there is a decimal component to `n` it will be preceeded by `opts.radix`.

install
=======

With [npm](http://npmjs.org) do:

```
npm install number-grouper
```

license
=======

MIT
