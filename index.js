const server = require("./api/server.js");
require("dotenv").config();
const port = process.env.PORT || 4000;
const greeting = process.env.GREETING;
server.listen(4000, () => {
  console.log(`\n*** ${greeting} http://localhost:${port} ***\n`);
});
