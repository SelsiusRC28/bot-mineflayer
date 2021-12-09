const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'mc.srolemine.com', // minecraft server ip
  username: '', //mc email
  password: '', //mc password 
  port: '25565', //change if needed
  version: '1.8.9', //can be changed
   //microsoft or mojang
})

bot.on('spawn', (res) => {
  console.log("login")
  console.log(res)
})

// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)