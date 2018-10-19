const Discord = require("discord.js");
const client = new Discord.Client();

console.log("BOT ONLINE");


client.on('message', message => {
if (message.content === '$s') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('#profile')
          .then(m => {
            count++;
          })

        }
      }
});

client.login("NDc0MzA2OTczNzY0OTQzOTIy.DqvH7w.DRTyo7qzdV7PPeikQS9fdoe0me0");
