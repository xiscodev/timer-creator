<div style="display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-content: center; -ms-flex-line-pack: center; align-content: center; -webkit-align-items: center; -ms-flex-align: center; align-items: center;">
  <img style="-webkit-order: 0; -ms-flex-order: 0; order: 0; -webkit-flex: 0 1 auto; -ms-flex: 0 1 auto; flex: 0 1 auto; -webkit-align-self: auto; -ms-flex-item-align: auto; align-self: auto;" src="icon.png" />
</div>

<h1 style="text-align:center;">Timer Creator</h1>

## What is this?
A simple library to manage timeouts and intervals.

## How to use it?

First you need to import it in your project

- The require way

```js
let { createInterval, destroyInterval, TimeUnit } = require("timer-creator");
```

- The import way

```js
import { createTimeout, destroyTimeout, TimeUnit } from "timer-creator";
```
.
.
.

Then use it to establish a periodic callback execution until condition

```js
  import { createInterval, destroyInterval, TimeUnit } from "timer-creator";

  const TIMER_NAME = 'myIntervalName'

  function myFunction() {
    //
    hasConditionMeeted && destroyInterval(TIMER_NAME)
  }

  createInterval(TIMER_NAME, 2 * TimeUnit.MINUTE, myFunction)
```


Or one time callback execution

```js
  import { createTimeout, TimeUnit } from "timer-creator";

  function myFunction(arg1, arg2) {
    // 
  }

  createTimeout('myTimeoutName', 30 * TimeUnit.SECOND, myFunction, [arg1, arg2])
```

Powered by <a href="https://deepertech.com" target="_blank">Deepertech</a>
