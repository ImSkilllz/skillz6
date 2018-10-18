const Discord = require("discord.js");
const client = new Discord.Client();

console.log("BOT ONLINE");


client.on('message', message => {
if (message.content === '$s') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('#هوية')
          .then(m => {
            count++;
          })

        }
      }
});

client.login("NDc0NTg2NzU5MTA0MTY3OTM4.Dqp0LA.S-kAAE4jlQD7PbNPYs3n3B9J9oA");
