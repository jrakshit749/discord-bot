const fetch= require('node-fetch')

const Discord = require('discord.js');
const client = new Discord.Client();


async function loadMeme(msg) {
    try {
        let data = await fetch("https://uselessfacts.jsph.pl/random.json")
        data = await data.json()
        
        msg.reply("Here is a Fun Fact " + data.text, { tts: true })

    } catch (error) {
        msg.reply("oh NO! " , { tts: true })

    }

}
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '++') {
    loadMeme(msg);
  }
});
const fs=require('fs')
SECRET_KEY= fs.readFile("../DISCORD_BOT_SECRET_KEY.txt", (err, data)=>{
  if (err) throw err;
  client.login(SECRET_KEY);
})


