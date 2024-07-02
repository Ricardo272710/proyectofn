let ff = `https://telegra.ph/file/24fa902ead26340f3df2c.png`
const handler = async (m, {conn}) => {
  m.reply(global.semigey);
};
handler.command = /^(semigey|semigay)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.semigey = `
Soy semi y si soy gay me gusta el pene negro
`;
