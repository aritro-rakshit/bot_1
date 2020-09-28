const Discord = require('discord.js');
const fetch = require('node-fetch');

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
    if (message.content === '!cat') {
        const { file } = fetch('https://aws.random.cat/meow').then(response => response.json());
    
        message.channel.send(file);
    }
});
