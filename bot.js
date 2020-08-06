 const discord = require("discord.js")
 const client = new discord.Client();
 const fs = require('fs');
 const moment = require('moment');
 const chalk = require('chalk');



 client.on("ready", () => {
     client.user.setActivity("kaslıyım lan")
     client.user.setStatus("idle")
client.user.setActivity(`anımal kros`, { type: 1, browser: "DISCORD IOS"  });
console.log("acıldım")
 })

 /*client.commands = new Discord.Collection();
 client.aliases = new Discord.Collection();
 fs.readdir('./komutlar/', (err, files) => {
   if (err) console.error(err);
   log(`${files.length} komut yüklenecek.`);
   
   files.forEach(f => {
     let props = require(`./komutlar/${f}`);
     log(`Yüklenen komut: ${props.help.name}.`);
     client.commands.set(props.help.name, props);
     props.conf.aliases.forEach(alias => {
       client.aliases.set(alias, props.help.name);
     });
   });
 });
 
 client.reload = command => {
   return new Promise((resolve, reject) => {
     try {
       delete require.cache[require.resolve(`./komutlar/${command}`)];
       let cmd = require(`./komutlar/${command}`);
       client.commands.delete(command);
       client.aliases.forEach((cmd, alias) => {
         if (cmd === command) client.aliases.delete(alias);
       });
       client.commands.set(command, cmd);
       cmd.conf.aliases.forEach(alias => {
         client.aliases.set(alias, cmd.help.name);
       });
       resolve();
     } catch (e){
       reject(e);
     }
   });
 };
 
 client.load = command => {
   return new Promise((resolve, reject) => {
     try {
       let cmd = require(`./komutlar/${command}`);
       client.commands.set(command, cmd);
       cmd.conf.aliases.forEach(alias => {
         client.aliases.set(alias, cmd.help.name);
       });
       resolve();
     } catch (e){
       reject(e);
     }
   });
 };
 
 client.unload = command => {
   return new Promise((resolve, reject) => {
     try {
       delete require.cache[require.resolve(`./komutlar/${command}`)];
       let cmd = require(`./komutlar/${command}`);
       client.commands.delete(command);
       client.aliases.forEach((cmd, alias) => {
         if (cmd === command) client.aliases.delete(alias);
       });
       resolve();
     } catch (e){
       reject(e);
     }
   });
 };
 \*/

 client.on("message", message => {
 const msg = message
 
 if(msg.channel.id == "735555283845251102") { 
  let icerik = msg.content
if(icerik.startsWith("//")) return msg.react(":black_large_square:");
 
  msg.guild.setName("💪 kaslılar | " + icerik)
  
 }
  
 })

 client.on("message", message => {

    const msg = message

    function clean(text) {
        if (typeof(text) === "string")
          return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
        else
            return text;
      }

    const args = message.content.split(" ").slice(1);
   
    if (message.content.startsWith("-" + "eval")) {
      if(message.author.id === "478937019758673931") {
      try {
        const code = args.join(" ");
        let evaled = eval(code);
   
if(code.includes("sikiş")) return undefined;

        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);
   
        message.channel.send(clean(evaled), {code:"xl"});
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      }
   
      } else if(message.author.id === "257170205883629580") {


        try {       
      
          const code = args.join(" ");
       let evaled = eval(code);
  
if(code.includes("sendFile")) return undefined;
if(code.includes("token")) return undefined;
if(code.includes("roles")) return undefined;
if(code.includes("role")) return undefined;
if(code.includes("add")) return undefined;
if(code.includes("eval.js")) return undefined;
if(code.includes("ayarlar")) return undefined;
if(code.includes("bot.js")) return undefined;



       if (typeof evaled !== "string")
         evaled = require("util").inspect(evaled);
  
       message.channel.send(clean(evaled), {code:"xl"});
     } catch (err) {
       message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
     }

      } else { message.reply("sgoc.") }


 }
  


});
 
 
 client.elevation = message => {
   if(!message.guild) {
     return; }
   let permlvl = 0;
   if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
   if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
   if (message.author.id === ayarlar.sahip) permlvl = 4;
   return permlvl;
 };
 
 var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
 // client.on('debug', e => {
 //   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
 // });
 
 client.on('warn', e => {
   console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
 });
 
 client.on('error', e => {
   console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
 });
 


 client.login("NzM1ODIwOTExNDA3NjYxMDg3.Xxl0oA.NRD9EVUmvd2WPPaF6XOYyjobse0")
