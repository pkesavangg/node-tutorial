const os = require('os')


// Info about current user
const user = os.userInfo();


// System uptime in seconds
const uptime = os.uptime()
console.log(uptime)

// OS details

const currentOS = {
   name: os.type(),
   release: os.release(),
   totalMem: os.totalmem(),
   freeMem: os.freemem()
}


console.log(currentOS)

