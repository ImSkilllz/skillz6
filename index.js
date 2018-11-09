const Discord = require("discord.js");
const bot = new Discord.Client();
const ID = '359983506383699970';

console.log("BOT ONLINE");


bot.on('message', message => {

    
if (!ID.includes(message.author.id)) return;

if (message.content === 'spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send('k')
          .then(m => {
            count++;
          })

        }
      }
});



bot.login("NDc0ODg1MzMxMzUxNzY0OTkz.DsXzmw.-W6joRC1zeHNh-o5x6k_yOnXmDs");
