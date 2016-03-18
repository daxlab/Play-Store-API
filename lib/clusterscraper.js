/**
 * Created by daxlab on 18/3/16.
 */

const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

var startScrap = function() {
    require('./main');
};

console.log('Starting scraper');

if (cluster.isMaster) {
    // Fork workers.
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
        console.log('reforking.. ');
        cluster.fork();
        //startScrap();
    });
} else {
    startScrap();
}
