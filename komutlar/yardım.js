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
**[Destek Sunucusu](https://discord.gg/Q7trpgybUf)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=867766383932997702&permissions=8&scope=bot)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **-yardım**

• Bot ile ilgili tavsiyelerinizi veya istediniğiniz bi kodu **-istek-kod** yazarak bize iletebilirsiniz.
• Hatalı bi kod veya buglu bi kod bulursanız **-bug-bildir** yazarak bize bildirebilirsiniz.

**• Komutlar**
> [-moderasyon](https://discord.gg/Q7trpgybUf) → Moderasyon komudları görüntüler.
> [-kullanıcı](https://discord.gg/Q7trpgybUf) → Kullanıcı komutları.
> [-eğlence](https://discord.gg/Q7trpgybUf) → eğlence komutları.
> [-logo](https://discord.gg/Q7trpgybUf) → Logo komutları.
> [-gifyardım](https://discord.gg/Q7trpgybUf) → Gif komutları.
> [-extra](https://discord.gg/Q7trpgybUf) → Extra komutlar.

**• Bilgilendirme**

> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : G̶r̶e̶e̶n̶ Yellow Rose? ᵒwO#9254**
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
    name: 'yardım', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-yardım'
};