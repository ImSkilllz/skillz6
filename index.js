const Discord = require("discord.js");
const client = new Discord.Client();

console.log("BOT ONLINE");


client.on('message', message => {
if (message.content === '$s') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('#id')
          .then(m => {
            count++;
          })

        }
      }
});

client.login("NDc0MzA4NDk1OTcwMjcxMjM0.DqvYcA.nR5ziaLrz_ZqUeGRgPH9XxwPVWo");
