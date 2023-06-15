import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;ラ IƚʂFҽɾɾ\nNICKNAME:👑 Owner AʂƚɾσBσƚȥ\nORG:ラ IƚʂFҽɾɾ\nTITLE:soft\nitem1.TEL;waid=62823504965328:+62 823-5049-65328\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://chat.whatsapp.com/GWkhzPyj5NY518EyGC1snb\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:ferrjb146@gmail.com\nitem3.X-ABLabel:💌 Mail Owner AʂƚɾσBσƚȥ\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🐦 21-12-2004\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: global.fkontak })
let caption = `👋 Hai *@${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler