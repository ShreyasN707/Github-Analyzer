function cores(app) {   // pass your Express app to start it in workers
    const cluster = require('cluster');
    const os = require('os');

    const numCPUs = os.cpus().length;
    console.log(`Number of CPUs: ${numCPUs}`);

    if (cluster.isMaster) {
        console.log(`Master ${process.pid} is running`);

        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }

        cluster.on('exit', (worker, code, signal) => {
            console.log(`Worker ${worker.process.pid} died... Forking new worker`);
            cluster.fork();
        });
    } else {
        // Worker processes run the Express server
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Worker ${process.pid} started server at http://localhost:${PORT}`);
        });
    }
}

module.exports = {
    cores
};
