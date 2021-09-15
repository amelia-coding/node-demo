const os = require('os')

//Returns an array of objects containing information about each logical CPU core.
console.log("cpus:",os.cpus())

//Returns an array containing the 1, 5, and 15 minute load averages.
console.log("loadavg:",os.loadavg())

//Returns the amount of free system memory in bytes as an integer.
console.log("freemem:",os.freemem())
