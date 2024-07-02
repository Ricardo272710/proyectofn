const handler = async (m, {conn}) => {
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  await conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/gay', {
    avatar: await conn.profilePictureUrl(who, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
const handler = async (m, {conn}) => {
  m.reply(global.semigey);
};
handler.command = /^(semigey|semigay)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.semigey = `
ohhhh si soy gay me gusta el 
`;
