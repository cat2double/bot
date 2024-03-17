const consts = require("./consts.json");
const { WebSite } = require("./website.js");
const schedule = require('node-schedule');
schedule.scheduleJob(
    { minute : new schedule.Range(0, 59, 1), second: 0, tz: consts.tz },
    async function () {
      //await fetch("https://batl.onrender.com")
      console.log(new Date().toLocaleString("ru-RU", { timeZone: consts.tz }))
    })

WebSite.Start()