let handler = async (m, { conn, command, usedPrefix }) => {
let ff = `https://telegra.ph/file/24fa902ead26340f3df2c.png`
let anthonygaytxt = `
soy gay
` //Aquí arriba cambiar el texto sin borrar las comillas
await conn.sendFile(m.chat, 'https://telegra.ph/file/24fa902ead26340f3df2c.png', 'fantasy.jpg', anthonygaytxt.trim(),
//En esta imagen vas a poner el url de la imagen grande
 fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `Free Fire`,
body: `vs`,
mediaType: 1,
sourceUrl: 'https://www.instagram.com/ricardoookadm_',
thumbnailUrl: 'https://telegra.ph/file/24fa902ead26340f3df2c.png'
//Aquí arriba vas a poner el url de la imagen que irá junto a tu link de tu red social.
}}
}, { mentions: m.sender })

}
handler.command = /^(anthonygay|anthonygey)$/i
export default handler
