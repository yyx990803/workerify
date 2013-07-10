# Workerify

Turn the body of a function into a worker.

## Usage

``` js
var workerify = require('workerify')

var worker = workerify(function () {
    self.onmessage = function (e) {
        self.postMessage('pong')
    }
})

worker.onmessage = function (e) {
    console.log(e.data)
}

worker.postMessage('ping') // pong
```