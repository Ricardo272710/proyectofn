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
