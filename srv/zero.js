//CREATOR SC + BASE ORI : King Of Bear
//KLO MAU RECODE GK USAH HPUP CREATOR ORI TOLOL
//SKILL MODAL NYOLONG YT AJA BANGGA
//HARGA CREATOR GBLOK
//GK USH NGAKU² BUATAN LO
//NAMBAH FITUR MASIH ERROR AJA SOK² AN NGAKU BIKINAN LO

//JANGAN LUPA MMPIR KE WEB REST API DAN OLSHOP GUE
//OLSHOP : https://zeroyt7.xyz
//REST API : https://zeroyt7-api.xyz

//BUAT YG MAU ORDER APIKEY CHAT GUE AJA 085157740529
//KARENA SC INI FULL FITUR PKE REST API WEB GUE

//FOLLOW SOSIAL MEDIA
//INSTAGRAM @Zero_YT7
//YOUTUBE King Of Bear
//TIKTOK @_zeroyt7
//GITHUB Zero-YT7

var {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
ChatModification,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
var { color, bgcolor } = require('../mess/color')
var speed = require('performance-now')
var ggs = require('google-it')
var googleImage = require('g-i-s')
var { EmojiAPI } = require("emoji-api")
var emoji = new EmojiAPI()
var { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('../mess/myfunc')
var { fetchJson, kyun, fetchText } = require('../mess/fetcher')
var Exif = require('../mess/exif')
var exif = new Exif()
var request = require('request')
var translate = require('@vitalets/google-translate-api')
var fs = require('fs')
var hx = require("hxz-api")
var cheerio = require('cheerio')
var brainly = require('brainly-scraper')
var axios = require("axios")
var ffmpeg = require('fluent-ffmpeg')
var fetch = require('node-fetch')
var crypto = require('crypto')  
var yts = require('yt-search')
var Math_js = require('mathjs')
var { removeBackgroundFromImageFile } = require('remove.bg')
var moment = require('moment-timezone')
var { exec, spawn, execSync } = require('child_process')
fakeimg = fs.readFileSync('./img/zero.jpg')
fakethumb = fs.readFileSync('./img/thumbnail.jpg')
faketeks = '© OCHO STORE'
blocked = []
multi =false
nopref = false
allpref = true

//━━━━━━━━━━━━━━━[ STORAGE ]━━━━━━━━━━━━━━━━━//

var welcome = JSON.parse(fs.readFileSync('./storage/welcome.json'))
var setting = JSON.parse(fs.readFileSync('./setting.json'))
var antilink = JSON.parse(fs.readFileSync('./storage/antilink.json'))
var mute = JSON.parse(fs.readFileSync('./storage/mute.json'))
var config = JSON.parse(fs.readFileSync('./srv/config.js'))
var antivirtex = JSON.parse(fs.readFileSync('./storage/antivirtex.json'))
var pendaftar = JSON.parse(fs.readFileSync('./storage/user.json'))
var tebakgambar = JSON.parse(fs.readFileSync('./storage/tebakgambar.json'))

//━━━━━━━━━━━━━━━[ SETTING ]━━━━━━━━━━━━━━━━━//

NomorOwner = setting.NomorOwner
NameBot = setting.NameBot
NameOwner = setting.NameOwner

//━━━━━━━━━━━━━━━[ APIKEY ]━━━━━━━━━━━━━━━━━//

var apikey1 = config.Lolkey
var apikey2 = config.Xteam
var apikey3 = config.Vhtear
var apikey4 = config.Zeks
var apikey5 = config.Zero
var apikey6 = config.Nurutomo
var apikey7 = config.Hunter

//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━━━//

var time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')  
if(time2 < "23:59:00"){
var ucapanWaktu = 'Good night'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Good afternoon'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Good Night'
}
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

//━━━━━━━━━━━━━━━[ MODULE EXPORT ]━━━━━━━━━━━━━━━━━//
 
module.exports = zero = async (zero, zer) => {
try {
if (!zer.hasNewMessage) return
zer = zer.messages.all()[0]
if (!zer.message) return
if (zer.key && !zer.key.remoteJid == 'status@broadcast') return
global.blocked
zer.message = (Object.keys(zer.message)[0] === 'ephemeralMessage') ? zer.message.ephemeralMessage.message : zer.message
var typei = Object.keys(zer.message)[0]
global.prefix
var content = JSON.stringify(zer.message)
var from = zer.key.remoteJid
var type = Object.keys(zer.message)[0]
var { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio } = MessageType
var time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
var datre = new Date().toLocaleDateString()
var wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
var wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
var wit = moment.tz('Asia/Jayapura').format('HH : mm :ss')

var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
var date = new Date(dates);
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var haris = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
var cmd = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'
} else {
if (nopref){
prefix = ''
} else {
if (allpref){
var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : ''
} else {
prefix = prefa
}
}
}
body = (type === 'conversation' && zer.message.conversation.startsWith(prefix)) ? zer.message.conversation : (type == 'imageMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'videoMessage') && zer.message[type].caption.startsWith(prefix) ? zer.message[type].caption : (type == 'extendedTextMessage') && zer.message[type].text.startsWith(prefix) ? zer.message[type].text : (type == 'listResponseMessage') && zer.message[type].singleSelectReply.selectedRowId ? zer.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && zer.message[type].selectedButtonId ? zer.message[type].selectedButtonId : ''
var budo = (typei === 'conversation') ? zer.message.conversation : (typei === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var budy = (type === 'conversation') ? zer.message.conversation : (type === 'extendedTextMessage') ? zer.message.extendedTextMessage.text : ''
var command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var args = body.trim().split(/ +/).slice(1)
var isCmd = body.startsWith(prefix)
var arg = budy.slice(command.length + 2, budy.length)
var q = args.join(' ')
var timestampi = speed();
var latensyi = speed() - timestampi
var pes = (type === 'conversation' && zer.message.conversation) ? zer.message.conversation : (type == 'imageMessage') && zer.message.imageMessage.caption ? zer.message.imageMessage.caption : (type == 'videoMessage') && zer.message.videoMessage.caption ? zer.message.videoMessage.caption : (type == 'extendedTextMessage') && zer.message.extendedTextMessage.text ? zer.message.extendedTextMessage.text : ''
var messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
var botNumber = zero.user.jid
var Verived = "0@s.whatsapp.net"
var num = "6285157740529@s.whatsapp.net"
var ownerNumber = [`${NomorOwner}@s.whatsapp.net`,"6285157740529@s.whatsapp.net"]
var isGroup = from.endsWith('@g.us')
var sender = zer.key.fromMe ? zero.user.jid : isGroup ? zer.participant : zer.key.remoteJid
var senderNumber = sender.split("@")[0] 
var conts = zer.key.fromMe ? zero.user.jid : zero.contacts[sender] || { notify: jid.replace(/@.+/, '') }
var pushname = zer.key.fromMe ? zero.user.name : conts.notify || conts.vname || conts.name || '-'
var groupMetadata = isGroup ? await zero.groupMetadata(from) : ''
var groupName = isGroup ? groupMetadata.subject : ''
var groupId = isGroup ? groupMetadata.jid : ''
var groupMembers = isGroup ? groupMetadata.participants : ''
var groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
var groupDesc = isGroup ? groupMetadata.desc : ''
var groupOwner = isGroup ? groupMetadata.owner : ''
var isOwner = ownerNumber.includes(sender)
var isUser = pendaftar.includes(sender)
var isMuted = isGroup ? mute.includes(from) : false
var isWelcome = isGroup ? welcome.includes(from) : false
var isGroupAdmins = groupAdmins.includes(sender) || false
var isBotGroupAdmins = groupAdmins.includes(botNumber) || false
var isAntilink = isGroup ? antilink.includes(from) : false
var isAntivirtex = isGroup ? antivirtex.includes(from) : false
var isButton = (type == 'buttonsResponseMessage') ? zer.message.buttonsResponseMessage.selectedButtonId : ''
		
//━━━━━━━━━━━━━━━[ MESSAGE ]━━━━━━━━━━━━━━━━━//
		
mess = {
wait: 'Mohon Tunggu... Sedang Proses',
success: 'Done...',
wrongFormat: 'Format salah, Silahkan Cek Lagi Di List Menu',
error: {
stick: 'Sticker Salah Mohon Coba Lagi',
Iv: 'Link Error Silahkan Ganti Yg Lain'
},
only: {
group: 'Khusus Di Group',
bodmin: 'Jadikan Bot Admin Dulu',
admin: 'Khusus Admin Group'
}
}

//━━━━━━━━━━━━━━━[ CONNECTION ]━━━━━━━━━━━━━━━━━//
		
var sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
zero.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
zero.sendMessage(from, hasil, type, options).catch(e => {
zero.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}	
var isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
var reply = (teks) => {
zero.sendMessage(from, teks, text, {quoted:ftrol})
}
var sendMess = (hehe, teks) => {
zero.sendMessage(hehe, teks, text)
}
var mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? zero.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : zero.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
}
var costum = (pesan, tipe, target, target2) => {
zero.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
        
zero.chatRead(from, "read")

var sotoy = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍐',
        '🍊 : 🍋 : 🔔', //ANKER
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',        
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍒 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍌 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍋 Win👑',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍇 : 🍇', 
        '🔔 : 🍐 : 🔔',
        '🍌 : 🍌 : 🍌 Win👑'
        ]
        async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
         if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd && budy.match(/[1-9]{1}/)) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    reply("Jawaban Anda Benar!")
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Anda Salah!")
                }
            }
            if (isMuted){
            if (!isGroupAdmins && !isOwner && !zer.key.fromMe) return
            if (budy.toLowerCase().startsWith(`${prefix}unmute`)){
                let anu = mute.indexOf(from)
                mute.splice(anu, 1)
                fs.writeFileSync('./storage/mute.json', JSON.stringify(mute))
                reply('Bot telah diunmute di group ini')
            }
        }

//━━━━━━━━━━━━━━━[ FAKE ]━━━━━━━━━━━━━━━━━//

var ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 169,
status: 1,
surface : 1,
message: `OCHO STORE`, 
orderTitle: `OCHO STORE`,
thumbnail: fakethumb,
sellerJid: '0@s.whatsapp.net' 
}
}
}

//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

var sendButMessage = (id, text1, desc1, but = [], options = {}) => {
var buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
zero.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
)
}
async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
return zero.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

var sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
zero.sendMessage(to, media, MessageType.sticker,{quoted:ftrol})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
var sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
var fn = Date.now() / 10000;
var filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
zero.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
fs.unlinkSync(filename)
});
}

//━━━━━━━━━━━━━━━[ MESSAGE GROUP ]━━━━━━━━━━━━━━━━━//

if (isGroup && isAntilink && !zer.key.fromMe) {
if (budy.includes("://chat.whatsapp.com/")) {
if (isGroupAdmins) return reply("admin bebas");
reply("ANTILINK DETECTED!! Maaf Kamu Dikick Dari Group");
zero.groupRemove(from, [sender]);
}
}
if (budy.length > 3500) {
if (!isGroup) return
if (!isAntivirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 VIRTEX DETECTED!! 」\n\nKamu Mengirimkan Virus, Maaf Kamu Di Kick Dari Group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
zero.groupRemove(from, [sender])
}     

//━━━━━━━━━━━━━━━[ MEDIA ]━━━━━━━━━━━━━━━━━//
            
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
var isMedia = (type === 'imageMessage' || type === 'videoMessage')
var isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
var isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
var isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
var isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//━━━━━━━━━━━━━━━[ FITURNYA ]━━━━━━━━━━━━━━━━━//

switch (command) {                                                           
case 'infobot':
timestamp = speed();
latensi = speed() - timestamp
teks =
`┏━➤ *INFO BOT* 
*┃┃* Creator Bot : ${NameOwner}
*┃┃* Nama Owner : ${NameOwner}
*┃┃* Nama Bot : ${NameBot}
*┃┃* Prefix : Multi Prefix
*┃┃* Total Pengguna : ${pendaftar.length}
*┃┃* Runtime : ${runtime(process.uptime())}
*┃┃* Speed : ${latensi.toFixed(4)} second
*┃┃* Language : Javascript
*┃┗━━━━━━━━*
*┃◗ Thanks To Allah S.W.T*
*┃◗ Thank To Ortu*
*┃◗ Thank To OCHO STORE*
*┗━━━━━━━ •*`
                  but = [
{ buttonId: `script`, buttonText: { displayText: '📌 INFO CREATOR' }, type: 1 },
{ buttonId: `owner`, buttonText: { displayText: '👥 OWNER' }, type: 1 }
]
sendButLocation(from, teks, faketeks, fakeimg, but)
break
case 'menu':
teks =
`Hallo @${num.split('@')[0]} Saya Adalah Bot Khusus Yg Di Ciptakan Untuk Membantu Owner Saya Berjualan, Silah Kn Gunakan Jasa Saya Untuk Memper Mudah Kamu Dalam Membuat Sticker Dll.` 
but = [
{ buttonId: `infobot`, buttonText: { displayText: '📌 INFO' }, type: 1 },
{ buttonId: `command`, buttonText: { displayText: '📖 MENU' }, type: 1 }
]
sendButLocation(from, teks, faketeks, fakeimg, but)
break
case 'command':
teks =
`[ 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 ]
𝐍𝐚𝐦𝐚 𝐁𝐨𝐭 : ${NameBot}
𝐂𝐫𝐞𝐚𝐭𝐨𝐫 𝐁𝐨𝐭 : ${faketeks}
𝐍𝐚𝐦𝐚 𝐎𝐰𝐧𝐞𝐫 : ${NameOwner}
𝐍𝐨𝐦𝐞𝐫 𝐎𝐰𝐧𝐞𝐫 : ${NomorOwner}
𝐑𝐮𝐧𝐭𝐢𝐦𝐞 : ${runtime(process.uptime())}
𝐒𝐩𝐞𝐞𝐝 : ${latensyi.toFixed(4)} second
𝐋𝐢𝐛 : Baileys
𝐓𝐲𝐩𝐞 : NodeJs

𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮
• ${prefix}antilink
• ${prefix}antivirtex
• ${prefix}welcome
• ${prefix}group
• ${prefix}linkgrup
• ${prefix}hidetag
• ${prefix}tagall
• ${prefix}setdesc
• ${prefix}setname
• ${prefix}setpp
• ${prefix}kick
• ${prefix}add
• ${prefix}demote
• ${prefix}promote

𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐌𝐞𝐧𝐮
• ${prefix}sticker
• ${prefix}toimg
• ${prefix}attp
• ${prefix}tomp3
• ${prefix}stickerwm

𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮
• ${prefix}bc
• ${prefix}owner
• ${prefix}report
• ${prefix}runtime
• ${prefix}speed
• ${prefix}delchat
• ${prefix}mute
• ${prefix}ummute
• ${prefix}spam
• ${prefix}promoteall
• ${prefix}demoteall
• ${prefix}spamsw
• ${prefix}upswteks
• ${prefix}upswimage
• ${prefix}upswlokasi
• ${prefix}upswaudio
• ${prefix}upswvoice
• ${prefix}upswsticker
• ${prefix}upswgif
• ${prefix}upswvideo
• ${prefix}shutdown
• ${prefix}offline
• ${prefix}online
• ${prefix}setppbot
• ${prefix}setnamebot
• ${prefix}setprefix
• ${prefix}setbio
• ${prefix}leave
• ${prefix}restart
• ${prefix}join
• ${prefix}readall
• ${prefix}unreadall
• ${prefix}pin
• ${prefix}unpin
• ${prefix}nano

𝐄𝐯𝐚𝐥 𝐌𝐞𝐧𝐮
• x
• >

Download Menu
• ${prefix}play
• ${prefix}ytmp3
• ${prefix}ytmp4
• ${prefix}tiktoknowm
• ${prefix}tiktokwm
• ${prefix}igfoto
• ${prefix}igtv

Game Menu
• ${prefix}tebakgambar
• ${prefix}canceltebakgambar
• ${prefix}dare
• ${prefix}tebakbendera
• ${prefix}tebakkabupaten
• ${prefix}tebakkalimat
• ${prefix}tebakkata
• ${prefix}tebakkimia
• ${prefix}tebaklirik
• ${prefix}tebaktebakan
• ${prefix}tekateki
• ${prefix}truth

Nsfw Menu
• ${prefix}ahegao
• ${prefix}ass
• ${prefix}bdsm
• ${prefix}blowjob
• ${prefix}cuckold
• ${prefix}cum
• ${prefix}ero
• ${prefix}femdom
• ${prefix}foot
• ${prefix}hentai
• ${prefix}hnt_gifs
• ${prefix}manga
• ${prefix}jahy
• ${prefix}nsfwneko
• ${prefix}orgy
• ${prefix}panties
• ${prefix}pussy
• ${prefix}sfwneko

Asupan Menu
• ${prefix}asupan
• ${prefix}asupanfilminfo
• ${prefix}cewekchina
• ${prefix}cewekindonesia
• ${prefix}cewekjapan
• ${prefix}cewekkorea
• ${prefix}cewekmalaysia
• ${prefix}cewekthailand
• ${prefix}cewekvietnam

Text Pro Menu
• ${prefix}blackpink
• ${prefix}neon
• ${prefix}matrix
• ${prefix}joker
• ${prefix}devil
• ${prefix}transformer
• ${prefix}thunder
• ${prefix}harry
• ${prefix}gradient

Random Menu
• ${prefix}katabijak
• ${prefix}fakta
• ${prefix}motivasi
• ${prefix}artinama

Stalk Menu
• ${prefix}igstalk
• ${prefix}githubstalk

Search Menu
• ${prefix}herodetail
• ${prefix}playstore
• ${prefix}xnxxsearch
`
but = [
{ buttonId: `infobot`, buttonText: { displayText: '📌 INFO' }, type: 1 },
{ buttonId: `owner`, buttonText: { displayText: '👥 OWNER' }, type: 1 }
]
sendButLocation(from, teks, faketeks, fakeimg, but)
break
case 'welcome': 
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] === 'on') {
if (isWelcome) return reply('𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!')
welcome.push(from)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐖𝐞𝐥𝐜𝐨𝐦𝐞')
} else if (args[0] === 'off') {
if (!isWelcome) return reply('𝐒𝐮𝐝𝐚𝐡 𝐌𝐚𝐭𝐢 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!')
var ini = welcome.indexOf(from)
welcome.splice(ini, 1)
fs.writeFileSync('./storage/welcome.json', JSON.stringify(welcome))
reply('𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐖𝐞𝐥𝐜𝐨𝐦𝐞')
} else if (!q){
anu =`SILAHKAN PILIH SALAH SATU`
punten = [{buttonId: 'welcome on', buttonText: {displayText: '📌 ON'}, type: 1},{buttonId: 'welcome off', buttonText: {displayText: '📌 OFF️'}, type: 1}]
var btngrass = {
contentText: `${anu}`,
footerText: 'OCHO STORE',
buttons: punten,
headerType: 1
}
await zero.sendMessage(from, btngrass, MessageType.buttonsMessage, {quoted: ftrol})
}
break
case 'antilink':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntilink) return reply("𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!");
antilink.push(from);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤");
} else if (args[0] == "off") {
antilink.splice(from, 1);
fs.writeFileSync(
"./storage/antilink.json",
JSON.stringify(antilink)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤");
} else if (!q) {
sendButMessage(from, `MODE ANTILINK`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antilink on`,
buttonText: {
displayText: `📌 ON`,
},
type: 1,
},
{
buttonId: `antilink off`,
buttonText: {
displayText: `📌 OFF`,
},
type: 1,
},
]);
}
break
case 'antivirtex':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args[0] == "on") {
if (isAntivirtex) return reply("𝐒𝐮𝐝𝐚𝐡 𝐀𝐤𝐭𝐢𝐟 𝐒𝐞𝐛𝐞𝐥𝐮𝐦𝐧𝐲𝐚...!!!");
antivirtex.push(from);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐚𝐤𝐭𝐢𝐟𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱");
} else if (args[0] == "off") {
antivirtex.splice(from, 1);
fs.writeFileSync(
"./storage/antivirtex.json",
JSON.stringify(antivirtex)
);
reply("𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦𝐚𝐭𝐢𝐤𝐚𝐧 𝐀𝐧𝐭𝐢𝐯𝐢𝐫𝐭𝐞𝐱");
} else if (!q) {
sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan Pilih Salah Satu`, [
{
buttonId: `antivirtex on`,
buttonText: {
displayText: `📌 ON`,
},
type: 1,
},
{
buttonId: `antivirtex off`,
buttonText: {
displayText: `📌 OFF`,
},
type: 1,
},
]);
}
break
case 'group':
case 'grup':
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
but = [
{ buttonId: 'groupbuka', buttonText: { displayText: '☕ BUKA' }, type: 1 },
{ buttonId: 'grouptutup', buttonText: { displayText: '✉️ TUTUP' }, type: 1 }
]
sendButMessage(from, "Silahkan Pilih Untuk Buka/Tutup Group", faketeks, but, zer)
break
case 'groupbuka' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐦??𝐮𝐤𝐚 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
zero.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐮𝐭𝐮𝐩 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
zero.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
linkgc = await zero.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\n𝐋𝐢𝐧𝐤 𝐆𝐫𝐨𝐮𝐩 *${groupName}*`
zero.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zero.groupMakeAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, @${mentioned[0].split('@')[0]} 𝐊𝐚𝐦𝐮 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐃𝐢 𝐆𝐫𝐨𝐮𝐩 *${groupMetadata.subject}*`, mentioned, true)
zero.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (zer.message.extendedTextMessage === undefined || zer.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = zer.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = '𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐊𝐚𝐦𝐮 𝐓𝐢𝐝𝐚𝐤 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐀𝐝𝐦𝐢𝐧 𝐋𝐚𝐠𝐢 :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
zero.groupDemoteAdmin(from, mentioned)
} else {
mentions(`𝐏𝐞𝐫𝐢𝐧𝐭𝐚𝐡 𝐃𝐢 𝐓𝐞𝐫𝐢𝐦𝐚, 𝐌𝐞𝐧𝐮𝐫𝐮𝐧𝐤𝐚𝐧 : @${mentioned[0].split('@')[0]} 𝐌𝐞𝐧𝐣𝐚𝐝𝐢 𝐌𝐞𝐦𝐛𝐞𝐫`, mentioned, true)
zero.groupDemoteAdmin(from, mentioned)
}
break
case 'add':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if (args.length < 1) return reply('Nomer Yg Mau Di Add Mana ?')
if (args[0].startsWith('08')) return reply('Gunakan Kode Negara Gan')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
zero.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('𝐆𝐚𝐠𝐚𝐥 𝐌𝐞𝐧𝐚𝐦𝐛𝐚𝐡𝐤𝐚𝐧 𝐓𝐚𝐫𝐠𝐞𝐭, 𝐌𝐮𝐧𝐠𝐤𝐢𝐧 𝐊𝐚𝐫𝐞𝐧𝐚 𝐃𝐢 𝐏𝐫𝐢𝐯𝐚𝐭𝐞!')
}
break
case 'kick':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
if(!q)return reply(`*Format Error!*\n\n*Example : ${prefix + command} @tag*`)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
y = q.split('@')[1] + '@s.whatsapp.net'
zero.groupRemove(from, [y])
reply(`𝐒𝐮𝐜𝐜𝐬𝐞𝐬 𝐊𝐢𝐜𝐤 𝐓𝐚𝐫𝐠??𝐭!`)
break
case 'tagall':
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
let arr = [];
let txti = `[ 𝗧𝗔𝗚 𝗔𝗟𝗟 ]\n${q ? q : ''}\n\n`
for (let i of groupMembers){
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
break
case 'setname':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
zero.groupUpdateSubject(from, `${body.slice(9)}`)
zero.sendMessage(from, `\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐍𝐚𝐦𝐚 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐣𝐚𝐝𝐢\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.bodmin)
zero.groupUpdateDescription(from, `${body.slice(9)}`)
zero.sendMessage(from, `\`\`\𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐃𝐞𝐬𝐤𝐫𝐢𝐩𝐬𝐢 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'hidetag':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
ht = body.slice(9)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
mentions(ht, members_id, false)
break
case 'setpp':
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await zero.downloadAndSaveMediaMessage(zer, './storage/media_user')
await zero.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`𝐒𝐮𝐤𝐬𝐞𝐬 𝐌𝐞𝐧𝐠𝐠𝐚𝐧𝐭𝐢 𝐏𝐫𝐨𝐟𝐢𝐥 𝐆𝐫𝐨𝐮𝐩\`\`\` *${groupMetadata.subject}*`)
break

case 'bc':
case 'bcbut':
if (!isOwner && !x.key.fromMe) return reply(`Hanya Untuk @${ownerNumbers.split("@")[0]}`)
if (args.length < 1) return reply('Teksnya?')
anu = await zero.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `menu`, buttonText: {displayText: '✉️ MENU'}, type: 1},{buttonId: `sewabot`, buttonText: {displayText: '📌 SEWA BOT'}, type: 1}]
var btnbc = {
contentText: `${q}`,
footerText: '*SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT*',
buttons: buttonss,
headerType: 1
}
await zero.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
}
reply(`Sukses Mengirim Broadcast:\n${q}`)
break

case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !zer.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `OCHO STORE`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && zer.message.videoMessage.seconds < 11 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, Pada Saat Mengkonversi ${tipe} Ke Stiker. Pastikan Untuk Video Yang Dikirim Tidak Lebih Dari 9 Detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
let media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi Kesalahan, Silahkan Coba Beberapa Saat Lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
zero.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim Gambar Dengan Caption ${prefix}sticker Atau Tag Gambar Yang Sudah Dikirim`)
}
break
case 'attp':
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
zero.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'toimg':
if (!isQuotedSticker) return reply('Reply Stickernya')
encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await zero.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, Pada Saat Mengkonversi Sticker Ke Gambar ')
buffer = fs.readFileSync(ran)
costum(buffer, image, Verived, `OCHO STORE`)
fs.unlinkSync(ran)
})
break
case 'stickerwm':
case 'swm':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh: ${prefix + command} Zero | Gantenk`)
if (isMedia && !zer.message.videoMessage || isQuotedImage) {
ppp = `${args.join(' ')}`
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
const media = await zero.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
const packname1 = ppp.split('|')[0]
const author1 = ppp.split('|')[1]
exif.create(packname1, author1, `stickwm_${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: zer})
fs.unlinkSync(media)	
fs.unlinkSync(`./sticker/${sender}.webp`)	
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isMedia && zer.message.videoMessage.fileLength < 10000000 || isQuotedVideo && zer.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
wmsti = body.slice(11)
if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
const media = await zero.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
const packname1 = wmsti.split('|')[0]
const author1 = wmsti.split('|')[1]
exif.create(packname1, author1, `stickwm_${sender}`)
reply(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
zero.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftrol})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else {
reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
}
break

case 'owner':
let inilist = []
for (let i of ownerNumber) {
let vname = zero.contacts[i] != undefined ? zero.contacts[i].vname || zero.contacts[i].notify : undefined
inilist.push({
"displayName": 'OCHO STORE',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${NameOwner}\n`
+ `ORG: Creator ${NameOwner} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${NomorOwner}:${NomorOwner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await zero.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
{buttonId: 'youtube', buttonText: {displayText: '📌 YOUTUBE'}, type: 1},
{buttonId: 'instagram', buttonText: {displayText: '📌 INSTAGRAM'}, type: 1},
{buttonId: 'tiktok', buttonText: {displayText: '📌 TIKTOK'}, type: 1}
]
 buttons = {
contentText: 'Nih Nomer Owner Ku Mau Tau Tentang Apa Ya ?',
footerText: faketeks,
buttons: button,
headerType: 1
}
await zero.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break      
case 'report':
let pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = zer.participant
let teks1 = `[𝗥𝗘𝗣𝗢𝗥𝗧]\n𝐏𝐞𝐬𝐚𝐧 : ${pesan}`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
zero.sendMessage(`6281215567282@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break
case 'youtube':
teks =
`Nih Youtube Owner Ku Jangan Lupa Di Subscribe Ya https://www.youtube.com (Gk Punya yt)`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'instagram':
teks =
`Nih Instagram Owner Ku Jangan Lupa Di Follow Ya https://instagram.com/cptk_oy`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case 'tiktok':
teks =
`Nih Tiktok Owner Ku Jangan Lupa Di Follow Ya https://tiktok.com/@cepegeming`
zero.sendMessage(from, teks, text, {quoted: ftrol})
break
case "runtime":
case "test":
run = process.uptime();
teks = `${kyun(run)}`;
reply(teks);
break
case 'speed':
case 'ping':
reply(`Speed: ${latensyi.toFixed(4)} Second`)
break

case 'script':
case 'sc':
teks =
`[ INFO SCRIPT ]
• SC ORI BY : ZEROYT7
• RECORD BY : KING OF BEAR
• RECORD² BY : OCHO STORE

[ LINK SCRIPT ]
• https://wa.me/6281215567282`
but = [
          { buttonId: `menu`, buttonText: { displayText: '✉️ BACK TO MENU' }, type: 1 },
              { buttonId: `owner`, buttonText: { displayText: '👥 OWNER' }, type: 1 }
]
        sendButLocation(from, teks, faketeks, fakeimg, but, { thumbnail: Buffer.alloc(0) })
break

case 'nulis':
           if (args.length == 0) return reply(`Example: ${prefix + command} Bot | Indo`)
                    txt = args.join(" ")
                    reply(mess.wait)
                    buffer = await getBuffer(`https://api.lolhuman.xyz/api/nulis?apikey=${apikey1}&text=${txt}`)
                    zero.sendMessage(from, buffer, image, { quoted: ftrol, caption: 'Done Nih....'})
                    break
                    case 'delchat':
                   if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                reply('Sukses menghapus chat' + from)
                await sleep(4000)
                zero.modifyChat(from, ChatModification.delete)
                break
                case 'mute':
			    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
			    if (!isGroup) return reply(mess.only.group)
                if (isMuted) return reply(`udah mute`)
                mute.push(from)
                fs.writeFileSync('./storage/mute.json', JSON.stringify(mute))
                reply('Bot berhasil dimute di chat ini')
                break
                 case 'spam':
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					zero.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				case 'demoteall':
		if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.bodmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                zero.groupDemoteAdmin(from, members_id)
                break
                case 'promoteall':
                if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
		if (!isGroup) return reply(mess.only.group)
		if (!isBotGroupAdmins) return reply(mess.only.bodmin)
                members_id = []
		for (let mem of groupMembers) {
	   	members_id.push(mem.jid)
	  	}
                zero.groupMakeAdmin(from, members_id)
                break
                case 'spamsw':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					zero.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
                    case 'upswteks':
                    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(10)
                    zero.sendMessage('status@broadcast', teks, MessageType.text)
                    reply(`Sukses upload status:\n${teks}`)
                    break	
                    case 'upswlokasi':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
  if (args.length < 1) return reply('Teksnya?')
                    teks = body.slice(12)
                    zero.sendMessage('status@broadcast', {degreesLatitude: 24.121231, degreesLongitude: 55.1121221, name:teks,address:`${NameBot}`}, MessageType.location)
                    reply(`Sukses upload lokasi:\n${teks}`)
                    break	
                                        case 'upswsticker':
                    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !zer.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
						buff = await zero.downloadMediaMessage(encmedia)
						zero.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                    case 'upswaudio':
                    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !zer.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
						buff = await zero.downloadMediaMessage(encmedia)
						zero.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !zer.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
						buff = await zero.downloadMediaMessage(encmedia)
						zero.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
						case 'upswvideo':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                    var konti = body.slice(11)
                    reply(mess.wait)
                    var enmediap = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await zero.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    zero.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                        case 'upswgif':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                    var konti = body.slice(7)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zero.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    zero.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                    var teksyy = body.slice(11)
                    reply(mess.wait)
                    enmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await zero.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    zero.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: ftrol, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
                        case 'shutdown':
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				return zero.sendMessage(from, JSON.stringify(eval(process.exit())))
				reply('Okey')
				break
				case 'online':
            if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				offline = false
				reply('Status : ONLINE')
				break
			case 'offline':
			if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				offline = true
				reply('Status : OFFLINE')
				break
				case 'setprofile':
				case 'setppbot':
				zero.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					enmediau = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await zero.downloadAndSaveMediaMessage(enmediau)
					await zero.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
					case 'setnamebot':
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                zero.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
                case 'setprefix':
      if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
      if (args.length < 1) return reply(`Contoh ${prefix + command} multi/nopref`)
           if (q === 'multi'){
              multi = true
                    reply(`Berhasil mengubah prefix ke ${q}`)
                } else if (q === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Berhasil mengubah prefix ke ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${q}`
                    reply(`Berhasil mengubah prefix ke ${q}`)
					}
					break
					case 'setbio':
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
					iyek = body.slice(8)
					zero.setStatus(`${iyek}`)
					reply(`Sukses mengganti bio ke ${body.slice(8)}`)
					break
					case 'leave':
				if (!isGroup) return reply(mess.only.group)
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				zero.updatePresence(from, Presence.composing)
				zero.groupLeave(from)
						break
						case 'restart':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
reply(`_Restarting ${NameBot}_`)
exec(`cd &&  node index`)
sleep(4000)
reply('Sukses')
break
case 'join':
				if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				 if (args.length < 1) return ephe('Link nya mana?')
					zero.query({
json:["action", "invite", `${args[0].replace('https://chat.whatsapp.com/','')}`]
})
reply('Sukses bergabung dalam group')
break
case 'readall':
                if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                var chats = await zero.chats.all()
                chats.map( async ({ jid }) => {
                await zero.chatRead(jid)
                })
		var teks = `\`\`\`Successfully read ${chats.length} chats !\`\`\``
	        await zero.sendMessage(from, teks, text, {quoted: ftrol})
		console.log(chats.length)
		break
		case 'unreadall':
                if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                var chats = await zero.chats.all()
                chats.map( async ({ jid }) => {
                await zero.chatRead(jid, 'unread')
                    })
		    var teks = `\`\`\`Successfully unread ${chats.length} chats !\`\`\``
		    await zero.sendMessage(from, teks, text, {quoted: ftrol})
		    console.log(chats.length)
	        break
	case 'pin':
                if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                zero.modifyChat(from, ChatModification.pin)
                reply('*succes pin this chat*')
                console.log('pinned chat = ' + from)
                break
                case 'unpin':
                if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
                zero.modifyChat(from, ChatModification.unpin)
                reply('*succes unpin this chat*')
                console.log('unpin chat = ' + from)
                break
                case 'nano':
if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
if (!q) return reply('Nama file nya apaa ?')
anu = fs.readFileSync(`${q}`)
reply(String(anu))
break

//CASE BY King Of Bear
//KALO MAU AMBIL CANTUMIN NAMA GUE :)

case 'igstalk':
if(!q) return reply('Username Ig Nya Mana ?')
username = args[0]
res = await fetchJson(`https://zeroyt7-api.xyz/igstalk?username=${username}&apikey=${apikey5}`)
res = res.result
ig = await getBuffer(res.thumbnail)
txt = `*[ INSTRAGAM STALK ]*
⟡ Creator : ${res.creator}
⟡ Username : ${res.username}
⟡ Fullname : ${res.fullname}
⟡ Verified : ${res.verified}
⟡ Video Count : ${res.video_count_reel}
⟡ Followers : ${res.followers}
⟡ Follow : ${res.follow}
⟡ Bussines : ${res.is_bussines}
⟡ Professional : ${res.is_professional}
⟡ Category : ${res.category}
⟡ Bio : ${res.bio}`
zero.sendMessage(from, ig, image, {quoted: ftrol, caption: txt})
break
case 'githubstalk':
if(!q) return reply('Username Github Nya Mana ?')
result = await fetchJson(`https://zeroyt7-api.xyz/ghstalk?username=${q}&apikey=${apikey5}`)
result = result.result
gh = await getBuffer(result.avatar_url)
teks = `*[ GITHUB STALK ]*
⟡ Login : ${result.login}
⟡ Id : ${result.id}
⟡ Node Id : ${result.node_id}
⟡ Type : ${result.type}
⟡ Site Admin : ${result.site_admin}
⟡ Name : ${result.name}
⟡ Company : ${result.company}
⟡ Blog : ${result.blog}
⟡ Location : ${result.location}
⟡ Email : ${result.email}
⟡ Hireable : ${result.hireable}
⟡ Bio : ${result.bio}
⟡ Twitter Username : ${result.twitter_username}
⟡ Public Repos : ${result.public_repos}
⟡ Public Gists : ${result.public_gists}
⟡ Followers : ${result.followers}
⟡ Following : ${result.following}
⟡ Created At : ${result.created_at}
⟡ Update At : ${result.updated_at}
⟡ Url : ${result.url}
⟡ Html Url : ${result.html_url}
⟡ Followers Url : ${result.followers_url}
⟡ Following Url : ${result.following_url}
⟡ Gists Url : ${result.gists_url}
⟡ Starred Url : ${result.starred_url}
⟡ Subscriptons Url : ${result.subscriptions_url}
⟡ Organizations Url : ${result.organizations_url}
⟡ Repos Url : ${result.repos_url}
⟡ Events Url : ${result.events_url}
⟡ Received Event Url : ${result.received_events_url}`
zero.sendMessage(from, gh, image, {quoted:ftrol, caption: teks})
break

case 'canceltebakgambar':
if (!tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Anda tidak memiliki tebak gambar sebelumnya")
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
reply("Success mengcancel tebak gambar sebelumnya")
break
case 'tebakgambar':
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
get_result = await fetchJson(`https://zeroyt7-api.xyz/tebakgambar?apikey=${apikey5}`)
get_result = get_result.result
ini_image = get_result.img
petunjuk = get_result.petunjuk
jawaban = get_result.jawaban
ini_buffer = await getBuffer(ini_image)
await zero.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: `[ GAK BISA JAWAB WAJIB DONASI]\n\nJawaban : _ _ _ _ \n` + petunjuk }).then(() => {
tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
})
await sleep(30000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
reply("Jawaban: " + jawaban)
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./storage/tebakgambar.json", JSON.stringify(tebakgambar))
}
break

case 'katabijak':
bjk = await fetchJson(`https://zeroyt7-api.xyz/bijak?apikey=${apikey5}`)
reply(bjk.result)
break
case 'fakta':
fkt = await fetchJson(`https://zeroyt7-api.xyz/fakta?apikey=${apikey5}`)
reply(fkt.result)
break
case 'motivasi':
mtv = await fetchJson(`https://zeroyt7-api.xyz/motivasi?apikey=${apikey5}`)
reply(mtv.result)
break
case 'quotes':
qt = await fetchJson(`https://zeroyt7-api.xyz/quotes?apikey=${apikey5}`)
reply (qt.quotes)
break
case 'dare':
dr = await fetchJson(`https://zeroyt7-api.xyz/dare?apikey=${apikey5}`)
reply(dr.result)
break
case 'tebakbendera':
bndr = await fetchJson(`https://zeroyt7-api.xyz/tebakbendera?apikey=${apikey5}`)
bndr = await getBuffer(bndr.result.img)
text = `Hayo Tebak Nih
Jawaban : ____

Gak Bisa Jawab? Wajib Coly 🤫`
zero.sendMessage(from, bndr, image, {quoted: ftrol, caption: text})
break
case 'tebakkabupaten':
skuy = await fetchJson(`https://zeroyt7-api.xyz/tebakkabupaten?apikey=${apikey5}`)
skuy = skuy.result
tulis = ` Silahkan Di Jawab Ya

Creator : ${NameOwner}
Jawaban : ____

Gak Bisa Jawab? Wajib Coly 🤫`
hasil = await getBuffer(skuy.url)
zero.sendMessage(from, hasil, image, {quoted: ftrol, caption: tulis})
break
case 'tebakkalimat':
klm = await fetchJson(`https://zeroyt7-api.xyz/tebakkalimat?apikey=${apikey5}`)
klm = klm.result
txt = `Silahkan Di Jawab Bro

Soal : ${klm.soal}
Jawab : ____

Gak Bisa Jawab? Wajib Coly 🤫`
reply(txt)
break
case 'tebakkata':
kta = await fetchJson(`https://zeroyt7-api.xyz/tebakkata?apikey=${apikey5}`)
kta = kta.result
txt = `Silahkan Di Jawab Bro

Soal : ${kta.soal}
Jawab : ____

Gak Bisa Jawab? Wajib Coly 🤫`
reply(txt)
break
case 'tebakkimia':
kmi = await fetchJson(`https://zeroyt7-api.xyz/tebakkimia?apikey=${apikey5}`)
kmi = kmi.result
txt = `Silahkan Di Jawab Bro

Unsur : ____
Lambang : ${kmi.lambang}

Gak Bisa Jawab? Wajib Coly 🤫`
reply(txt)
break
case 'tebaklirik':
lrk = await fetchJson(`https://zeroyt7-api.xyz/tebaklirik?apikey=${apikey5}`)
lrk = lrk.result
txt = `Silahkan Di Jawab Bro

Soal : ${lrk.soal}
Jawab : ____

Gak Bisa Jawab? Wajib Coly 🤫`
reply(txt)
break
case 'tebaktebakan':
tbkk = await fetchJson(`https://zeroyt7-api.xyz/tebaktebakan?apikey=${apikey5}`)
tbkk = tbkk.result
txt = `Silahkan Di Jawab Bro

Soal : ${klm.soal}
Jawab : ____

Gak Bisa Jawab? Wajib Coly 🤫`
reply(txt)
break
case 'tekateki':
teka = await fetchJson(`https://zeroyt7-api.xyz/tekateki?apikey=${apikey5}`)
teka = teka.result
txt = `Silahkan Di Jawab Bro

Soal : ${teka.soal}
Jawab : ____

Gak Bisa Jawab? Wajib Coly 🤫`
reply(txt)
break
case 'truth':
trh = await fetchJson(`https://zeroyt7-api.xyz/truth?apikey=${apikey5}`)
reply(trh.result)
break

case 'herodetail':
if(!q) return reply('Nama Heronya Mana ?')
detail = await fetchJson(`https://zeroyt7-api.xyz/herodetails?name=${q}&apikey=${apikey5}`)
detail = detail.result
img = await getBuffer(detail.image)
txt = `[ MOBILE LEGEND HERO DETAIL ]

Hero Name : ${detail.hero_name}
Entrance Quotes : ${detail.entrance_quotes}
Hero Feature : ${detail.hero_feature}
Movement Speed : ${detail.attributes.movement_speed}
Physical Attack : ${detail.attributes.physical_attack}
Magic Power : ${detail.attributes.magic_power}
Attack Speed : ${detail.attributes.attack_speed}
Physical Defense : ${detail.attributes.physical_defense}
Magic Defense : ${detail.attributes.magic_defense}
Basic Attack : ${detail.attributes.basic_atk_crit_rate}
Hp : ${detail.attributes.hp}
Mana : ${detail.attributes.mana}
Ability : ${detail.attributes.ability_crit_rate}
Hp Regen : ${detail.attributes.hp_regen}
Mana Regen : ${detail.attributes.mana_regen}
Battle Point : ${detail.price.battle_point}
Diamond : ${detail.price.diamond}
Fragment : ${detail.price.hero_fragment}
Role : ${detail.role}
Durability : ${detail.skill.durability}
Offense : ${detail.skill.offense}
Skill Effects : ${detail.skill.skill_effects}
Difficulty : ${detail.skill.difficulty}
Speciality : ${detail.speciality}
Laning Recommendation : ${detail.laning_recommendation}
Release Date : ${detail.release_date}
Background Story : ${detail.background_story}`
zero.sendMessage(from, img, image, {quoted: ftrol, caption: txt})
break
case 'playstore':
if(!q) return reply('Apa Yang Mau Di Cari ?')
ply = await fetchJson(`https://zeroyt7-api.xyz/playstore?name=${q}&apikey=${apikey5}`)
ply = ply.result
ini_txt = '[ PLAY STORE SEARCH ]\n\n'
for (var x of ply) {
ini_txt += `⟡ Name : ${x.name}\n`
ini_txt += `⟡ Link : ${x.link}\n`
ini_txt += `⟡ Developer : ${x.developer}\n`
ini_txt+= `⟡ Link Developer : ${x.link_dev}\n\n`
}
reply(ini_txt)
break

case 'asupan':
reply(mess.wait)
asupan = await fetchJson(`https://zeroyt7-api.xyz/asupan?apikey=${apikey5}`)
asupan = await getBuffer(asupan.result.url)
zero.sendMessage(from, asupan, video, {quoted: ftrol, caption: 'Done Nih...'})
break
case 'asupanfilminfo':
if(!q) return reply('Link Asupan Nya Mana ?')
buff = await fetchJson(`https://zeroyt7-api.xyz/asupanfilminfo?link=https://asupanfilm.link/?link=${q}&apikey=${apikey5}`)
buff = buff.result
txt = `Judul : ${buff.judul}`
reply(txt)
break
case 'cewekchina':
case 'cewekindonesia':
case 'cewekjapan':
case 'cewekkorea':
case 'cewekmalaysia':
case 'cewekthailand':
case 'cewekvietnam':
reply(mess.wait)
cewek = await fetchJson(`https://zeroyt7-api.xyz/${command}?apikey=${apikey5}`)
cewek = await getBuffer(cewek.result.url)
buttons = [{buttonId: `${command}`,buttonText:{displayText: `LANJUT➡️`},type:1}]
imageMsg = (await zero.prepareMessageMedia(cewek, "imageMessage", { thumbnail: cewek, })).imageMessage
buttonsMessage = {footerText:'© OCHO STORE', imageMessage: imageMsg,
contentText:`Done Nih... `,buttons,headerType:4}
prep = await zero.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
zero.relayWAMessage(prep)
break

case 'ahegao':
case 'ass':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'hentai':
case 'hnt_gifs':
case 'jahy':
case 'manga':
case 'nsfwneko':
case 'orgy':
case 'panties':
case 'pussy':
case 'sfwneko':
reply(mess.wait)
hentai = await fetchJson(`https://zeroyt7-api.xyz/${command}?apikey=${apikey5}`)
hentai = await getBuffer(hentai.result)
but = [{buttonId:`${command}`,buttonText:{displayText:'LANJUT➡️'},type:1}]
sange = await zero.prepareMessage(from, hentai, image, {quoted: ftrol})
const buttonMessagessss = {
imageMessage: sange.message.imageMessage,
contentText: `Done Nih...`,
footerText: '© OCHO STORE',
buttons: but,
headerType: 4
}
zero.sendMessage(from, buttonMessagessss, MessageType.buttonsMessage, {quoted: ftrol})
break

case 'blackpink':
case 'neon':
case 'matrix':
case 'joker':
case 'devil':
case 'transformer':
case 'thunder':
case 'harry':
case 'gradient':
reply(mess.wait)
if(!q) return reply('Teks Nya Mana ?')
pro = await fetchJson(`https://zeroyt7-api.xyz/${command}?text=${q}&apikey=${apikey5}`)
pro = await getBuffer(pro.data)
zero.sendMessage(from, pro, image, {quoted: ftrol, caption: 'Done Nih...'})
break

case 'igfoto':
reply(mess.wait)
if(!q) return reply('Link Foto Ig Nya Mana ?')
ig = await fetchJson(`https://zeroyt7-api.xyz/igfoto?link=${q}&apikey=${apikey5}`)
ig = await getBuffer(ig.result.link)
zero.sendMessage(from, ig, image, {quoted: ftrol, caption: 'Done Nih...'})
break
case 'igtv':
reply(mess.wait)
if(!q) return reply('Link Video Tv Nya Mana ?')
ig = await fetchJson(`https://zeroyt7-api.xyz/igtv?link=${q}&apikey=${apikey5}`)
ig = await getBuffer(ig.result.link)
zero.sendMessage(from, ig, video, {quoted: ftrol, caption: 'Done Nih...'})
break
case 'tiktoknowm':
reply(mess.wait)
if(!q)return reply('Link Video Tiktok Nya Mana ?')
tt = `https://zeroyt7-api.xyz/tiktok?url=${q}&apikey=${apikey5}`
tt = await fetchJson(tt)
hasil = await getBuffer(tt.result.nowatermark)
await zero.sendMessage(from, hasil, video, {quoted: ftrol, caption : 'Done Nih...'})
break
case 'tiktokwm':
reply(mess.wait)
if(!q)return reply('Link Video Tiktok Nya Mana ?')
tt = `https://zeroyt7-api.xyz/tiktok?url=${q}&apikey=${apikey5}`
tt = await fetchJson(tt)
hasil = await getBuffer(tt.result.watermark)
await zero.sendMessage(from, hasil, video, {quoted: ftrol, caption : 'Done Nih...'})
break
case 'play':
reply(mess.wait)
if(!q) return reply('Judul Video Yt Nya Mana ?')
reply (mess.wait)
play = await fetchJson (`https://zeroyt7-api.xyz/ytplay?q=${q}&apikey=${apikey5}`)
capt = `*[ YOUTUBE PLAY ]*

⟡ Title : ${play.result.title}
⟡ Size : ${play.result.size}
⟡ Views : ${play.result.views}
⟡ Like Video : ${play.result.likes}
⟡ Dislike : ${play.result.dislike}
⟡ Channel : ${play.result.channel}
⟡ Upload Date : ${play.result.uploadDate}
⟡ Deskripsi : ${play.result.desc}

*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM AUDIO*`
buffer = await getBuffer (play.result.thumb)
zero.sendMessage(from, buffer, image, {quoted: ftrol, caption: capt})
hasil = await getBuffer (play.result.result)
zero.sendMessage(from, hasil, audio, {mimetype: 'audio/mp4', quoted: ftrol})
break
case 'ytmp3':
reply(mess.wait)
if(!q) return reply('Link Video Yt Nya Mana ?')
reply (mess.wait)
mp3 = await fetchJson (`https://zeroyt7-api.xyz/ytmp3?url=${q}&apikey=${apikey5}`)
capt = `*[ YOUTUBE MP3 ]*

⟡ Title : ${mp3.result.title}
⟡ Size : ${mp3.result.size}
⟡ Views : ${mp3.result.views}
⟡ Like Video : ${mp3.result.likes}
⟡ Dislike : ${mp3.result.dislike}
⟡ Channel : ${mp3.result.channel}
⟡ Upload Date : ${mp3.result.uploadDate}
⟡ Deskripsi : ${mp3.result.desc}

*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM AUDIO*`
buffer = await getBuffer (mp3.result.thumb)
zero.sendMessage(from, buffer, image, {quoted: ftrol, caption: capt})
hasil = await getBuffer (mp3.result.result)
zero.sendMessage(from, hasil, audio, {mimetype: 'audio/mp4', quoted: ftrol})
break
case 'ytmp4':
reply(mess.wait)
if(!q) return reply('Link Video Yt Nya Mana ?')
reply (mess.wait)
mp4 = await fetchJson (`https://zeroyt7-api.xyz/ytmp4?url=${q}&apikey=${apikey5}`)
capt = `*[ YOUTUBE MP4 ]*

⟡ Title : ${mp4.result.title}
⟡ Size : ${mp4.result.size}
⟡ Views : ${mp4.result.views}
⟡ Like Video : ${mp4.result.likes}
⟡ Dislike : ${mp4.result.dislike}
⟡ Channel : ${mp4.result.channel}
⟡ Upload Date : ${mp4.result.uploadDate}
⟡ Deskripsi : ${mp4.result.desc}

*MOHON TUNGGU BEBERAPA MENIT BOT SEDANG MENGIRIM VIDEO*`
buffer = await getBuffer (mp4.result.thumb)
zero.sendMessage(from, buffer, image, {quoted: ftrol, caption: capt})
hasil = await getBuffer (mp4.result.result)
zero.sendMessage(from, hasil, video, {mimetype: 'video/mp4', quoted: ftrol})
break

case 'xnxxsearch':
if(!q) return reply('Apa Yg Mau Di Cari ?')
bkp = await fetchJson(`https://zeroyt7-api.xyz/xnxxsearch?q=${q}&hentaivid&apikey=${apikey5}`)
bkp = bkp.result.result
txt = ""
for (var x of get_result) {
txt += `Title : ${x.title}\n`
txt += `Info : ${x.info}\n`
txt += `Link : ${x.link}\n`
}
reply(txt)
break

case 'artinama':
if(!q) return reply('Nama Nya Mana')
nama = args.join(" ")
art = await fetchJson(`https://zeroyt7-api.xyz/artinama?nama=${nama}&apikey=${apikey5}`)
reply(art.result.arti)
break

//━━━━━━━━━━━━━━━[ AKHIR FITUR ]━━━━━━━━━━━━━━━━━//
        
default:
if (budy.startsWith('>')) {
console.log(color('[EVAL1]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
} else if (budy.startsWith('x')) {
console.log(color('[EVAL2]'), color(moment(zer.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
try {
return zero.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
} catch (err) {
e = String(err)
reply(e)
}
}
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Error : %s', color(e, 'red'))
}
// console.log(e)
}
}