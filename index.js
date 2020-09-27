// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
client.login('NzU3ODE3MzQxMTk4MzM2MDgz.X2l6ZQ.eiEp4PFqdfkcE5cAyErav3879aE');

client.on('message', message => {
    console.log(message.content);
    if (message.content === '!AA') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('boring');
    }
    
    if (message.content === '!RB') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('fast');
    }
    
    if (message.content === '!SS') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('rude');
    }
    
    if (message.content === '!JGD') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('She is nice');
    }
    
    if (message.content === '!SD') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('ki ar bolbo');
    }
    if (message.content === '!RANA') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('oreo!');
    }
    if (message.content === '!SM') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('boring');
    }
    if (message.content === '!KG') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('fun loving');
    }
    if (message.content === '!AN') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('dadu');
    }
    if (message.content === '!DD') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Bhalo lok!');
    }
    if (message.content === '!CIA') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Kno naam nicchis baba');
    }
    if (message.content === '!sxc_helpline') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('Available commands: !AA, !RB, !SS, !JGD, !SD, !RANA, !SM, !KG, !AN, !DD, !CIA');
    }
});
