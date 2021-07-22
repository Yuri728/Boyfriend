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
> [-grafiti](https://discord.gg/qzHTkhjQgT) → grafiti logo oluşturur. 
> [-discord](https://discord.gg/qzHTkhjQgT) → discord logo oluşturur. 
> [-gold](https://discord.gg/qzHTkhjQgT) → gold logo oluşturur. 
> [-comic](https://discord.gg/qzHTkhjQgT) → comic logo oluşturur. 
> [-bubble](https://discord.gg/qzHTkhjQgT) → bubble logo oluşturur. 
> [-bubble2](https://discord.gg/qzHTkhjQgT) → bubble2 logo oluşturur. 
> [-dinamik](https://discord.gg/qzHTkhjQgT) → dinamik logo oluşturur. 
> [-altın](https://discord.gg/qzHTkhjQgT) → altın logo oluşturur. 
> [-banner](https://discord.gg/qzHTkhjQgT) → banner logo oluşturur. 
> [-basit](https://discord.gg/qzHTkhjQgT) → basit logo oluşturur. 
> [-elmas](https://discord.gg/qzHTkhjQgT) → elmas logo oluşturur. 
> [-neonmavi](https://discord.gg/qzHTkhjQgT) → neonmavi logo oluşturur. 
> [-kalın](https://discord.gg/qzHTkhjQgT) → kalın logo oluşturur. 
> [-anime](https://discord.gg/qzHTkhjQgT) → anime logo oluşturur. 
> [-habbo](https://discord.gg/qzHTkhjQgT) → habbo logo oluşturur. 
> [-arrow](https://discord.gg/qzHTkhjQgT) → arrow logo oluşturur. 
> [-green](https://discord.gg/qzHTkhjQgT) → green logo oluşturur. 
> [-alev](https://discord.gg/qzHTkhjQgT) → alev logo oluşturur. 
> [-red](https://discord.gg/qzHTkhjQgT) → red logo oluşturur. 
> [-kalp](https://discord.gg/qzHTkhjQgT) → kalp logo oluşturur. 

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
    name: 'logo', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-logo'
};