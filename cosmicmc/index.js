const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'mc.cosmicmc.com', // minecraft server ip
  username: 'brayanrc16', // minecraft username
  // minecraft password, comment out if you want to log into online-mode=false servers
  // port: 51763,                // only set if you need a port that isn't 25565
  // version: false,             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  // auth: 'mojang'              // only set if you need microsoft auth, then set this to 'microsoft'
})


bot.once('spawn', () => {
	bot.chat('/login loby11')	
	console.log("login")
	setTimeout(function(){
		bot.setQuickBarSlot(0);
		bot.activateItem()

		bot.on('windowOpen', async (window) => {
    	const boats = window.slots
      
    		await bot.clickWindow(40, 1 ,0)
    		await bot.clickWindow(13, 1 ,0)

    		bot.on('whisper', (username, message) => {
			  if (username === bot.username) return
			  switch(message){
			  	case 'red':
			  		const red = bot.chat('/team red')
			  		console.log(red)
			  		break
			  	case 'blue':
			  		const blue = bot.chat('/team blue')
			  		console.log(blue)
			  		break
			  	case 'green':
			  		const green = bot.chat('/team green')
			  		console.log(green)
			  		break
			  	case 'yellow':
			  		const yellow = bot.chat('/team yellow')
			  		console.log(yellow)
			  		break
			  }
			})


  		})

	}, 5000)
})




// bot.on('windowOpen', (window) => {
//     const boats = window.slots
//       .filter(x => x != null)
//       .filter(x => x.displayName === 'Oak Boat')
//     const mouseButton = 0 // 0: left click, 1: right click
//     const mode = 0 // 0: single click
//     bot.clickWindow(boats[0].slot, mouseButton, mode)
//   })


// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)