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
    }
    
    if (message.content === '!RB') {
        
        message.channel.send('fast');
    }
    
    if (message.content === '!SS') {
        
        message.channel.send('rude');
    }
    
    if (message.content === '!JGD') {
        
        message.channel.send('She is nice');
    }
    
    if (message.content === '!SD') {
        
        message.channel.send('ki ar bolbo');
    }
    if (message.content === '!RANA') {
        
        message.channel.send('oreo!');
    }
    if (message.content === '!SM') {
        
        message.channel.send('boring');
    }
    if (message.content === '!KG') {
        
        message.channel.send('fun loving');
    }
    if (message.content === '!AN') {
        
        message.channel.send('dadu');
    }
    if (message.content === '!DD') {
        
        message.channel.send('Bhalo lok!');
    }
    if (message.content === '!CIA') {
        
        message.channel.send('Kno naam nicchis baba');
    }
    if (message.content === '!sxc_helpline') {
        
        message.channel.send('Available commands: !AA, !RB, !SS, !JGD, !SD, !RANA, !SM, !KG, !AN, !DD, !CIA');
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
});
