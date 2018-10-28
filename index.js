const tokenfile = require("./token.json");
const Discord = require("discord.js");
const client = new Discord.Client();
const hook = new Discord.WebhookClient('506090110509514752', 'tr8hhuUeYD3sAQnwkhcMQgWuvEH-XBO5pP4PuJukkoQGy2z9EiSW9zyX5MPwIlxc-rzl');

console.log("BOT ONLINE");


client.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        hook.send('fuck!');
          .then(m => {
            count++;
          })

        }
      }
});


