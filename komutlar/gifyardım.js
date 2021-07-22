const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » BOYFRIEND Bot  **")
.setThumbnail("https://cdn.discordapp.com/emojis/852109363011518465.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/Q7trpgybUf)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=855069516093456414&permissions=8&scope=bot)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **-yardım**

**• Komutlar**
> [-normal](https://discord.gg/qzHTkhjQgT) → normal gifler.
> [-NSFW](https://discord.gg/qzHTkhjQgT) → NSFW gifler.
> [-hayvan](https://discord.gg/qzHTkhjQgT) → Hayvan gifleri.
> [-kemalsunal](https://discord.gg/qzHTkhjQgT) → **Kemal Sunal** gifleri.

**• Bilgilendirme**

> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : Manyak*#9999**
> :eye_in_speech_bubble: **Sürümüm : 2.0.1**
© 2020 Captan | Tüm hakları saklıdır.
`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'gifyardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yardım'
};