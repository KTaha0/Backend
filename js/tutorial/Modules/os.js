const os = require("os");

const usr = os.userInfo();
const currentOS = {
  name: os.type(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
