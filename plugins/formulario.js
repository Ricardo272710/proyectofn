const handler = async (m, {conn}) => {
  m.reply(global.Ficha);
};
handler.command = /^(Ficha)$/i;
export default handler;
global.Ficha = `
LLENAR FORMULARIO

NICK FF :
NICK PERSONAL :
EDAD :
DISPONIBILIDAD DE TIEMPO :
EXP EN COMPE :
EXP EN MAPA :


Nota : Recuerda Una Vez Hayas Pasado El Formulario Se Te Hara Prueba En compe y mapa grande Si Mandas Ig O Tus Clips De Ahora Entras Directo
`;
