const Discord = require("discord.js");
const client = new Discord.Client();

console.log("BOT ONLINE");


client.on('message', message => {
if (message.content === '$s') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('منور عتيبي |<3')
          .then(m => {
            count++;
          })

        }
      }
});

client.login("NDc4NTMxNzAyMjY0OTU0ODgx.DqPLoA.Pn_UmRhjN_63fA-uTr2VGoWft8c");
