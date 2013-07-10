function workerify (func) {
    if (typeof func !== 'function') {
        throw new Error('expects a function to workerify.')
    }
    var script = func.toString().match(/^function[^{]*{((.|\n)*)}$/)[1],
        blob   = new Blob([script], {'type': 'application/javascript'}),
        url    = window.URL.createObjectURL(blob)
    return new Worker(url)
}

module.exports = workerify