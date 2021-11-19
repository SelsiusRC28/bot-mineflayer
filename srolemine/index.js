const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: 'localhost', // minecraft server ip
  username: 'brayanrc16', // minecraft username
  // minecraft password, comment out if you want to log into online-mode=false servers
  port: 55356,                // only set if you need a port that isn't 25565
  // version: false,             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  // auth: 'mojang'              // only set if you need microsoft auth, then set this to 'microsoft'
})


// bot.once('spawn', () => {
// 	bot.chat('/login loby11')	
// 	console.log("login success")
// 	setTimeout(function(){
// 		bot.setQuickBarSlot(0);
// 		bot.activateItem()

// 		bot.on('windowOpen', async (window) => {
//     	const boats = window.slots
      
//     		await bot.clickWindow(40, 1 ,0)
//     		await bot.clickWindow(13, 1 ,0)

//     		bot.on('whisper', (username, message) => {
// 			  if (username === bot.username) return
// 			  switch(message){
// 			  	case 'red':
// 			  		const red = bot.chat('/team red')
// 			  		console.log(red)
// 			  		break
// 			  	case 'blue':
// 			  		const blue = bot.chat('/team blue')
// 			  		console.log(blue)
// 			  		break
// 			  	case 'green':
// 			  		const green = bot.chat('/team green')
// 			  		console.log(green)
// 			  		break
// 			  	case 'yellow':
// 			  		const yellow = bot.chat('/team yellow')
// 			  		console.log(yellow)
// 			  		break
// 			  }
// 			})


//   		})

// 	}, 5000)
// })

const boss = 'iFrozeadoo'


bot.on('chat', function(username, message){

	if (username == bot.username) return

	let tokens = message.split(' ');


	function findTp(word){
		return word === '/tpaccept'
	}


	if (tokens.find(findTp)){
		bot.chat("tepe aceptado")
	}

	
	if(username != boss) return
	
	bot.on("physicTick", function(){
			if (message == 'ven') {

					// const playerFilter = (entity) => entity.username === boss
					// const player = bot.players[boss].entity.position;
					const player = bot.nearestEntity((entity) => entity.username === boss)

					if (player) {
			      bot.lookAt(player.position.offset(0, player.height, 0));
			    	bot.setControlState('forward', true)
			  	}
		
			}

		else if(message == 'detente'){
			bot.setControlState('forward', false)
		}

		else if(message == 'text'){
			console.log(bot.nearestEntity()) 
		}
	})

	if(tokens.find(word => word === 'bot')){
		bot.chat('! Soy un bot creado por '+boss)
	}

	if(tokens.find(word => word === 'fecha')){
	
		bot.chat(getDateTime())
		
	}
})


function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return day + "/" + month + "/" + year + "   " + hour + ":" + min + ":" + sec;

}


// Log errors and kick reasons:
bot.on('kicked', console.log)
bot.on('error', console.log)