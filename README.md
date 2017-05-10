v-reset-input
==============

---

> Reset input directive for Vue.js

Installation
------------

### Using yarn

`yarn add v-reset-input`

### Using npm

`npm i --save v-reset-input`

Demo
----

[DEMO](http://dflourusso.github.io/v-reset-input)

Usage
-----

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'

import ResetInput from 'v-reset-input'

Vue.use(ResetInput)
```

### Browser

```html
<!-- Include after Vue -->
<script src="v-reset-input/dist/v-reset-input.js"></script>
<script>
  Vue.use(ResetInput)
</script>
```

### Example

```html
<template>
  <input type="text" v-reset-input=''>
</template>
```
What about appearence?
----------------------

Just overwrite their css class

```stylus
.v-reset-input
  top 8px
  right 25px
  font-size 1.5em
  display none
  &.v-reset-input-active
    display block
```

Author
-------

-	[Daniel Fernando Lourusso](http://dflourusso.com.br)

License
-------

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
