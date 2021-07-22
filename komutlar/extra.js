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
> [-rol-ver](https://discord.gg/Q7trpgybUf) → Etiketlediniz kullanıcıya rol verir.
> [-rol-al](https://discord.gg/Q7trpgybUf) → Etiketlediğin kişden rol alır.
> [-anket](https://discord.gg/Q7trpgybUf) → Anket yaparsınız.
> [-rololuştur](https://discord.gg/Q7trpgybUf) → Rol oluşturur.
> [-id](https://discord.gg/Q7trpgybUf) → İstediğin bi kişinin ID sini alır.
> [-kanal-id](https://discord.gg/Q7trpgybUf) → Etiketlediğin kanalın ID sini atar.
> [-davet-oluştur](https://discord.gg/Q7trpgybUf) → Etiketlediğin kanalın ID sini atar.
> [-oy-kick](https://discord.gg/Q7trpgybUf) → Oylama yaparak bir kişiyi sunucudan atar.
> [-hesapla](https://discord.gg/Q7trpgybUf) → Matamatik işlemi yapar.
> [-davet-sıralaması](https://discord.gg/Q7trpgybUf) → Sunucuda yapılan davetleri sıralar
> [-iltifat](https://discord.gg/Q7trpgybUf) → Etiketlediğin kişiye bot iltifat eder.
> [-nick](https://discord.gg/Q7trpgybUf) → Etiketlediğin kişinin ismini değiştirir.
> [-tekerleme](https://discord.gg/Q7trpgybUf) → Tekerleme yazar.
> [-ilgincbilgi](https://discord.gg/Q7trpgybUf) → İlginç bilgi yazar.
> [-desteaç](https://discord.gg/Q7trpgybUf) → Zula deste açar.
> [-soygunyap](https://discord.gg/Q7trpgybUf) → Vurgun yapmaya hazırmısın? :D

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
    name: 'extra', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-extra'
};