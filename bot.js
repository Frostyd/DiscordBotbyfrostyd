// Appel des packages
const botconfig = require("./botconfig.json");
const help = require("./help.js");

const api = "NwkySd4sk5BI53XUHoqHAy8D1H3C4ERH";
const Discord = require("discord.js");
const fs = require("fs");
const got = require("got");

// Appel du client
const bot = new Discord.Client({disableEveryone: true});

// Message Test into the console
bot.on("ready", async () => {
  console.log(`${bot.user.username} est en ligne`);
  bot.user.setGame(">help")
});

// Base
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

// Commande de test
  if(cmd === `${prefix}Bonjour`){ // Commande envoyé par l'utilisateur
    message.reply("Salut!"); // Reponse du bot

  }

  // Help Menu
  let helpembed = new Discord.RichEmbed() // Creation de la commande help definie en embed
  .setColor("#c2f442") // Couleur
  .setTitle("Help Menu") // Titre
  .setDescription("Whrite (ex: >Helpstart) | to see the first Help Page.") // Description
  .addField("Page 1 | Start", "`All bases Commands that you will need`") // Sous Tire + Description du sous titre
  .addField("Page 2 | Advanced", "`Advanced Commands`")
  .addField("Page 3 | Market", "`Market Help`")
  .addField("Page 4 | Fun", "`Fun Commands`")
  .addField("Page 5 | Moderation", "`Moderation Commands (Admin Users Only)`")
  .addField("Page 6 | Music", "`Limha Musics Commands`");

  if(cmd === `${prefix}help`){ // Commande envoyé par l'utilisateur
    message.reply("I send the Help Menu in your DM's !"); // Reponse du bot
    message.author.send(helpembed) // Reponse du bot envoyé en dm definie en embed

  }

  // Start Menu
  let helpstartembed = new Discord.RichEmbed() // Creation de la commande help definie en embed
  .setColor("#c2f442") // Couleur
  .setTitle("Start Menu") // Titre
  .setDescription("All the basics commands to start.") // Description
  .addField(":bookmark: >start", "`Create your profile`") // Sous Tire + Description du sous titre
  .addField(":footprints: >take (ex: Alex)", "`Choose Alex`")
  .addField(":eyes: >profile", "`Look your profile`")
  .addField(":gift: >daily", "`Receive your daily reward`")

  if(cmd === `${prefix}helpstart`){ // Commande envoyé par l'utilisateur
    message.reply("I send the Start Menu in your DM's !"); // Reponse du bot
    message.author.send(helpstartembed) // Reponse du bot envoyé en dm definie en embed

  }

  // Advanced Menu
  let helpadvancedembed = new Discord.RichEmbed() // Creation de la commande help definie en embed
  .setColor("#c2f442") // Couleur
  .setTitle("Advanced Menu") // Titre
  .setDescription("Advanced Commands.") // Description
  .addField(":mute: >MuteChannel (Channel Name)", "`Mute the bot on this channel`"); // Sous Tire + Description du sous titre

  if(cmd === `${prefix}helpadvanced`){ // Commande envoyé par l'utilisateur
    message.reply("I send the Advanced Menu in your DM's !"); // Reponse du bot
    message.author.send(helpadvancedembed) // Reponse du bot envoyé en dm definie en embed

  }

  // Market Menu
  let helpmarketembed = new Discord.RichEmbed() // Creation de la commande help definie en embed
  .setColor("#c2f442") // Couleur
  .setTitle("Market Menu") // Titre
  .setDescription("Market basics commands.") // Description
  .addField(":shopping_cart: >market", "`Open the Shop`") // Sous Tire + Description du sous titre
  .addField(":heavy_dollar_sign: >Buy (object ID)", "`Buy an object on the Market`")
  .addField(":gem: >Sell (Object ID)", "`Sell one of your object on the Market Place`");

  if(cmd === `${prefix}helpmarket`){ // Commande envoyé par l'utilisateur
    message.reply("I send the Market Menu in your DM's !"); // Reponse du bot
    message.author.send(helpmarketembed) // Reponse du bot envoyé en dm definie en embed

  }

  // Fun Menu
  let helpfunembed = new Discord.RichEmbed() // Creation de la commande help definie en embed
  .setColor("#c2f442") // Couleur
  .setTitle("Fun Menu") // Titre
  .setDescription("All Fun Commands") // Description
  .addField(":ok_hand::skin-tone-2: >pfs", "`Pierre Feuille Sciseaux`") // Sous Tire + Description du sous titre
  .addField(":game_die: >gif", "`Send a gif in this channel`");

  if(cmd === `${prefix}helpfun`){ // Commande envoyé par l'utilisateur
    message.reply("I send the Fun Menu in your DM's !"); // Reponse du bot
    message.author.send(helpfunembed) // Reponse du bot envoyé en dm definie en embed

  }

  // Moderation Menu
  let helpmodembed = new Discord.RichEmbed() // Creation de la commande help definie en embed
  .setColor("#c2f442") // Couleur
  .setTitle("Moderation Menu") // Titre
  .setDescription("All Fun Commands") // Description
  .addField(":dash: >Kick (Username, Reason, Time)", "`Kick this user`") // Sous Tire + Description du sous titre
  .addField(":cloud_tornado: >Ban (Username, Reason, Time)", "`Ban this user`");

  if(cmd === `${prefix}helpmod`){ // Commande envoyé par l'utilisateur
    message.reply("I send the Mod Menu in your DM's !"); // Reponse du bot
    message.author.send(helpmodembed) // Reponse du bot envoyé en dm definie en embed

  }

  // Music Menu
  let helpmusicembed = new Discord.RichEmbed() // Creation de la commande help definie en embed
  .setColor("#c2f442") // Couleur
  .setTitle("Music Menu") // Titre
  .setDescription("Music Commands you Need") // Description
  .addField(":play_pause: >play (Youtube Video Link)", "`play the song`") // Sous Tire + Description du sous titre
  .addField(":pause_button: >pause", "`pause the current song`")
  .addField(":repeat_one: >repeat", "`repeat the current song`")
  .addField(":track_next: >skip", "`skip the current song`")
  .addField(":musical_note: >join", "`join Limha on this channel`")
  .addField(":musical_note: >leave", "`leave Limha of this channel`")
  .addField(":musical_note: >volume", "`set the bot volume`");

  if(cmd === `${prefix}helpmusic`){ // Commande envoyé par l'utilisateur
    message.reply("I send the Music Menu in your DM's !"); // Reponse du bot
    message.author.send(helpmusicembed) // Reponse du bot envoyé en dm definie en embed

  }

  // Random Gif Command
  if(cmd === `${prefix}gif`){ // Commande envoyé par l'utilisateur
    const res = await got("https://api.giphy.com/v1/gifs/random?api_key=NwkySd4sk5BI53XUHoqHAy8D1H3C4ERH&tag=&rating=G", {json: true})

    let gifembed  = new Discord.RichEmbed() // Creation de la commande help definie en embed
    .setColor("#4286f4") // Couleur
    .setImage(res.body.data.image_url) // Definition de l'image de l'auteur du message
    .setAuthor(message.author.tag, message.author.displayAvatarURL) // Definition de l'identifiant de l'auteur du message

    message.channel.send(gifembed); // Reponse du bot envoyé en dm definie en embed

  }

  // Send Profile Avatar Command
  if (cmd === `${prefix}avatar`){ // Commande envoyé par l'utilisateur
    let user = message.mentions.users.first() || message.author;

    let avatarembed  = new Discord.RichEmbed() // Creation de la commande help definie en embed
    .setColor("#f49e42") // Couleur
    .setImage(user.displayAvatarURL) // Definition de l'image de l'auteur du message

    message.channel.send(avatarembed); // Reponse du bot envoyé en dm definie en embed

  }

});

bot.login(botconfig.token);
