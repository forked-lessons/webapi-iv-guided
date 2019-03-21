const server = require("./api/server.js");
require("dotenv").config();

const port = process.env.PORT || 4000;
const greeting = process.env.GREETING || "Hello";

server.listen(4000, () => {
  console.log(`\n*** ${greeting} http://localhost:${port} ***\n`);
});
