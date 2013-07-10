# Workerify

Turn the body of a function into a web worker.

## Usage

``` js
var workerify = require('workerify')

var worker = workerify(function () {
	// think of here as if you are writing in a
	// separate file: you do not have access to
	// anything outside this function's scope.
    self.onmessage = function (e) {
        self.postMessage('pong')
    }
})

worker.onmessage = function (e) {
    console.log(e.data)
}

worker.postMessage('ping') // pong
```