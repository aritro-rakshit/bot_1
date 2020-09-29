const Discord = require('discord.js');
var pixabay = require("pixabay-api");
const fs = require('fs');  //require file system module to access routine JSON file
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
             message.reply(new Discord.MessageEmbed()
                 .setTitle("AA")
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    
    if (message.content === '!RB') {
        
        message.channel.send('fast');
        pixabay.searchImages(key, 'running').then((r) => {
             message.reply(new Discord.MessageEmbed()
                 .setTitle("RB")
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    
    if (message.content === '!SS') {
        
        message.channel.send('rude');
        pixabay.searchImages(key, 'rude face').then((r) => {
             message.reply(new Discord.MessageEmbed()
                 .setTitle("SS")
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    
    if (message.content === '!JGD') {
        
        message.channel.send('She is nice');
        pixabay.searchImages(key, 'happy face').then((r) => {
             message.reply(new Discord.MessageEmbed()
                 .setTitle("Here is a gift from aritro")
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    
    if (message.content === '!SD') {
        
        message.channel.send('ki ar bolbo');
        pixabay.searchImages(key, 'bold man').then((r) => {
             message.reply(new Discord.MessageEmbed()
                 .setTitle("SD")
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    if (message.content === '!RANA') {
        
        message.channel.send('oreo!');
        pixabay.searchImages(key, 'biscuit').then((r) => {
             message.reply(new Discord.MessageEmbed()
                 .setTitle("Rana")
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    if (message.content === '!SM') {
        
        message.channel.send('boring');
        pixabay.searchImages(key, 'boring person').then((r) => {
             message.reply(new Discord.MessageEmbed()
                 .setTitle("SM")
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    if (message.content === '!KG') {
        
        message.channel.send('fun loving');
        pixabay.searchImages(key, 'funny').then((r) => {
             message.reply(new Discord.MessageEmbed()
                 .setTitle("KG")
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    if (message.content === '!AN') {
        
        message.channel.send('dadu');
        pixabay.searchImages(key, 'old man').then((r) => {
             message.reply(new Discord.MessageEmbed()
                 .setTitle("AN")
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    if (message.content === '!DD') {
        
        message.channel.send('Bhalo lok!');
        pixabay.searchImages(key, 'happy face').then((r) => {
             message.reply(new Discord.MessageEmbed()
                 .setTitle("DD")
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    if (message.content === '!CIA') {
        
        message.channel.send('Kno naam nicchis baba');
        pixabay.searchImages(key, 'scared man').then((r) => {
             message.reply(new Discord.MessageEmbed()
                 .setTitle("CIA")
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
    }
    if (message.content === '!sxc_helpline') {
        pixabay.searchImages(key, 'helpline').then((r) => {
             message.reply(new Discord.MessageEmbed()
                 .setTitle("HELP COMMAND")
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
        message.channel.send('Available commands: !AA, !RB, !SS, !JGD, !SD, !RANA, !SM, !KG, !AN, !DD, !CIA, !puppy, !moral, !routine');
    }
    if (message.content === '!puppy'){
    pixabay.searchImages(key, 'puppy').then((r) => {
         message.reply(new Discord.MessageEmbed()
             .setTitle("Here is a gift from aritro")
             .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
 })
}
    if (message.content === '!moral'){
        message.channel.send('chude chatni bekar khatni!');
    pixabay.searchImages(key, 'hurt').then((r) => {
         message.reply(new Discord.MessageEmbed()
             .setTitle("chude chatni bekar khatni!")
             .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
 })
}
    if (message.content === '!routine') {
        fs.readFile('routine.json', (err, data) => {
            if (err) message.channel.send('Some unexpected error occured');
            let dayOfWeek = (new Date()).getDay();
            let fullRoutine = JSON.parse(data);
            let daysRoutine = fullRoutine.byDay;
            let daysClasses = daysRoutine[dayOfWeek].classes;
            message.channel.send(`Day :  ${daysRoutine[dayOfWeek].dayString}`);
            if (daysRoutine[dayOfWeek].isOffDay)
                message.channel.send("\tOff day");
            for (let j = 0; j < daysClasses.length; j++) {
                    message.channel.send(`\tProfessor Code : ${daysClasses[j].profCode}`);
                    message.channel.send(`\tTime Slot : ${daysClasses[j].startTime} - ${daysClasses[j].endTime}`);
                    message.channel.send(`\tPaper Code : ${daysClasses[j].paperCode}`);
                    message.channel.send("\t------------------------------------------------------------------");
            }
        });
    }
});
