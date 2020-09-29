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
    if (!message.content.startsWith("!") || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (command === 'sxc_helpline') {
        pixabay.searchImages(key, 'helpline').then((r) => {
             message.reply(new Discord.MessageEmbed()
                 .setTitle("HELP COMMAND")
                 .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
     })
        message.channel.send('Available commands: !sxc_helpline, !routine, !puppy');
    }
    if (command === 'puppy'){
    pixabay.searchImages(key, 'puppy').then((r) => {
         message.reply(new Discord.MessageEmbed()
             .setTitle("Here is a gift")
             .setImage(r.hits[Math.floor(Math.random() * r.hits.length)].largeImageURL))
 })
}
    if (command === 'routine') {
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
