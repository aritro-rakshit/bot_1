const Discord = require('discord.js');
var pixabay = require("pixabay-api");
var key = "18488703-34fe1bdd082710d3d75aac3b9";

const client = new Discord.Client();


client.once('ready', () => {
	console.log('Ready!');
});

client.login('NzU3ODE3MzQxMTk4MzM2MDgz.X2l6ZQ.eiEp4PFqdfkcE5cAyErav3879aE');

client.on('message', message => {
    if (message.content === '!AA') {
       
        message.channel.send('boring');
        pixabay.searchImages(key, 'bored face').then((r) => {
            //create embed
             message.reply(new Discord.MessageEmbed()
                 .setTitle("AA")
                 //get random puppy image from response
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    
    if (message.content === '!RB') {
        
        message.channel.send('fast');
        pixabay.searchImages(key, 'running').then((r) => {
            //create embed
             message.reply(new Discord.MessageEmbed()
                 .setTitle("RB")
                 //get random puppy image from response
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    
    if (message.content === '!SS') {
        
        message.channel.send('rude');
        pixabay.searchImages(key, 'rude face').then((r) => {
            //create embed
             message.reply(new Discord.MessageEmbed()
                 .setTitle("SS")
                 //get random puppy image from response
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    
    if (message.content === '!JGD') {
        
        message.channel.send('She is nice');
        pixabay.searchImages(key, 'happy face').then((r) => {
            //create embed
             message.reply(new Discord.MessageEmbed()
                 .setTitle("Here is a gift from aritro")
                 //get random puppy image from response
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    
    if (message.content === '!SD') {
        
        message.channel.send('ki ar bolbo');
        pixabay.searchImages(key, 'bold man').then((r) => {
            //create embed
             message.reply(new Discord.MessageEmbed()
                 .setTitle("SD")
                 //get random puppy image from response
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    if (message.content === '!RANA') {
        
        message.channel.send('oreo!');
        pixabay.searchImages(key, 'biscuit').then((r) => {
            //create embed
             message.reply(new Discord.MessageEmbed()
                 .setTitle("Rana")
                 //get random puppy image from response
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    if (message.content === '!SM') {
        
        message.channel.send('boring');
        pixabay.searchImages(key, 'boring person').then((r) => {
            //create embed
             message.reply(new Discord.MessageEmbed()
                 .setTitle("SM")
                 //get random puppy image from response
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    if (message.content === '!KG') {
        
        message.channel.send('fun loving');
        pixabay.searchImages(key, 'funny').then((r) => {
            //create embed
             message.reply(new Discord.MessageEmbed()
                 .setTitle("KG")
                 //get random puppy image from response
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    if (message.content === '!AN') {
        
        message.channel.send('dadu');
        pixabay.searchImages(key, 'old man').then((r) => {
            //create embed
             message.reply(new Discord.MessageEmbed()
                 .setTitle("AN")
                 //get random puppy image from response
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    if (message.content === '!DD') {
        
        message.channel.send('Bhalo lok!');
        pixabay.searchImages(key, 'happy face').then((r) => {
            //create embed
             message.reply(new Discord.MessageEmbed()
                 .setTitle("DD")
                 //get random puppy image from response
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    if (message.content === '!CIA') {
        
        message.channel.send('Kno naam nicchis baba');
        pixabay.searchImages(key, 'scared man').then((r) => {
            //create embed
             message.reply(new Discord.MessageEmbed()
                 .setTitle("CIA")
                 //get random puppy image from response
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    if (message.content === '!sxc_helpline') {
        pixabay.searchImages(key, 'helpline').then((r) => {
            //create embed
             message.reply(new Discord.MessageEmbed()
                 .setTitle("HELP COMMAND")
                 //get random puppy image from response
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
        message.channel.send('Available commands: !AA, !RB, !SS, !JGD, !SD, !RANA, !SM, !KG, !AN, !DD, !CIA, !puppy, !moral');
    }
    if (message.content === '!puppy'){
    pixabay.searchImages(key, 'puppy').then((r) => {
        //create embed
         message.reply(new Discord.MessageEmbed()
             .setTitle("Here is a gift from aritro")
             //get random puppy image from response
             .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
 })
}
    if (message.content === '!moral'){
        message.channel.send('chude chatni bekar khatni!');
    pixabay.searchImages(key, 'hurt').then((r) => {
        //create embed
         message.reply(new Discord.MessageEmbed()
             .setTitle("chude chatni bekar khatni!")
             //get random puppy image from response
             .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
 })
}
});
