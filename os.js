const os = require("os");

const user = os.userInfo();

console.log(user);

console.log(`user uptime is equal to ${os.uptime()} seconds`);
