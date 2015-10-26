# e2enode
A wrapper for using Google e2e as a nodejs library

Example:
-------

```javascript
> e2enode = require('e2enode');
> e2enode.require('e2e.openpgp.asciiArmor');
true
> e2e.openpgp.asciiArmor.encode('MESSAGE', e2e.stringToByteArray('test'));
'-----BEGIN PGP MESSAGE-----\r\nCharset: UTF-8\r\n\r\ndGVzdA==\r\n=+G7Q\r\n-----END PGP MESSAGE-----\r\n'
```
