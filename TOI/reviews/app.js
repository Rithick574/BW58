const express = require("express");
const app = express();
const checkMiddleware = require("./middleware");
const router = require("./router");
const cron = require('node-cron');
const events = require('events');
events.EventEmitter.defaultMaxListeners = 20;


app.use(checkMiddleware);

app.use("/", router);

cron.schedule('0*****',()=>{
  console.log('running a task every minute');
})

const PORT = 4000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
