﻿const Discord = require("discord.js");
const client = new Discord.Client();

console.log("BOT ONLINE");

client.on('message', message => {
if (message.content === '$spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(سباام يولد يلعن اومم الفله ${x})
          .then(m => {
            count++;
          })

        }
      }
});

client.login("NDc0NTMyNDQ3MDY1OTk3MzEy.DpvY5Q.RiVV-GQLa65q0g-rTIV8EblwmD0");
