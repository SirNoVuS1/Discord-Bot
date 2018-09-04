// Бот написан NoVuS
// Все вопросы в вк https://vk.com/thebelial_1
// Или в дискорд @Волан-Дэ Бабуля(SUPER_BABULKA)#9821



const Discord = require(`discord.js`) ;
const robot = new Discord.Client() ;
const { Client, RichEmbed } = require('discord.js');
var connection = require(`ffmpeg-binaries`) ; 
var opusscript = require("opusscript");


robot.login(`NDcxNTczNjI0NjIxNDk4MzY4.DjsHBA.katrqar740ajgbZmaD01M4wruhw`) ;

var prefix = "$" ;
var OrdaPrefix = '[Орда]' ;


robot.on(`message`, (message) =>{
  if (message.content.startsWith(prefix + 'user')) {
    const embed = new RichEmbed()
      .setTitle('Информация о пользователе')
      .setColor(0xFF0000)
      .setDescription(message.author.tag +"\n"+ message.author.username + '\nАватар:'+ message.author.avatar.link) ;
    message.channel.send(embed);
   }
 if(message.content.startsWith(prefix + "торт")){
     message.channel.send("``ЭТО ЛОЖЬ!!!!!!``") ;
 } // тест-команда $торт
 if (message.content.startsWith(prefix + 'help')) {
  const embed = new RichEmbed()
    .setTitle('Помощь')
    .setColor(0xFF0000)
    .setDescription('**Префикс: $**\nЕго ставить перед командами!\n\n\n**Команды:**\n\n**торт - ЛОЖЬ**\nТест-команда на проверку работоспособности бота\n\n**help - посмотреть это меню**\nДля ознакомления с возможностями бота\n\n**myavatar - ссылка на ваш аватар**\n\n**kick <@пользователь> - кикнуть пользователя**\nПример использования: $kick @USER#0001\n\n**ban <@пользователь> - забанить пользователя**\nПример использования: $ban @USER#0001\n\n**join - присоединить бота к голосовому каналу**\nВ разработке!') ;
  message.channel.send(embed);
 } //починил $help
 if (message.content == prefix + "myavatar") {
    message.channel.send('``Ваш аватар:``\n' + message.author.displayAvatarURL);
 } // команда $myavatar - отображает аватар пользователя
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'kick')) { //проверяет наличие команды $kick
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user); // проверяет наличие игрока на сервере
      if (member) {
        member.kick('``Причина отображена в журнале Аудита``').then(() => {
          message.reply(`${user.tag} кикнут!`); // выводит сообщение о кике
        }).catch(err => {
          message.reply('``Я не могу кикать! Настройте права!``'); // если бот не может кикнуть, выводит это
          console.error(err);
        });
      } else {
        message.reply('``Этот пользователь не на вашем сервере :/``'); // если бот не нашел участника на сервере, выводит это
      }
    } else {
      message.reply('``Я не могу понять кого мне кикнуть! Упомяните того, кого надо кикнуть!``'); // если в команде нет упоминания игрока, выводит это
    }
  }
  if (!message.guild) return;
  if (message.content.startsWith(prefix + 'ban')) { // проверка на наличие $ban
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user); // проверка на наличие игрока на сервере
      if (member) {
        member.ban({
          reason: 'Ты очень плохой!', // причина бана
        }).then(() => {
          message.reply(`${user.tag} забанен успешно!`); // если бан прошел успешно, выводит это
        }).catch(err => {
          message.reply('Я не могу банить! Настройте права!'); // если у бота нет прав для бана, выводит это
          console.error(err);
        });
      } else {
        message.reply("Этот пользователь не на вашем сервере :/"); // если пользователя не на сервере, выводит это
      }
    } else {
      message.reply("Я не могу понять кого мне банить! Упомяните того, кого надо забанить!"); // если пользователя не упомянули, выводит это
    }
  }
  if (!message.guild) return;

  if (message.content === prefix + 'join') {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          message.channel.sendMessage('Успешно присоединился!');
        })
        .catch(console.log);
    } else {
      message.channel.sendMessage('Ты должен сначала войти в голосовой канал!');
    }
  }
  if (message.content === prefix + "myprefix") {
    (OrdaPrefix + ' ' + message.author.username)
  }
//cnnection.playArbitraryInput('https://www.youtube.com/watch?v=ozYjakb_py4');
});