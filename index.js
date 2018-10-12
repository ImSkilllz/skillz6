const Discord = require("discord.js");
const client = new Discord.Client();

console.log("BOT ONLINE");


client.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('<@474172469566111745> هههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههههه')
          .then(m => {
            count++;
          })

        }
      }
});

client.login("NDc0MzAxNzU0OTgxNDgyNDk2.DqJU-A.jMeZigIPW1nPYQF68cVUFVw9-TQ");
