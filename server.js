const app = require("./middleware/app");
require("dotenv").config();
require('./config/database')
// require('./model/list')

app.listen(process.env.PORT, () => {
  console.log(`${process.env.PORT} to listening!`);
});
