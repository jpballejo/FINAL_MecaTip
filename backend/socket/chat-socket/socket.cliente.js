console.log('Socket-Clientes-chat cargado...');
exports.funcionInit = () => {
  console.log('socket-clientes inicio');
}
usuariosChat = [];
/////////////////////////////////////////////////////////////////////////
exports.agregarCliente = (socket, user) => {
  console.log(user._id);
  let _user = usuariosChat.filter(u => u.id == `${user._id}`)[0];
  if(!_user) {
    usuariosChat.push({
      id: user._id,
      socketClient: socket,
      usuario: user
    });
    return true;
  }
  usuariosChat = usuariosChat.map(u => (u.id == user.id) ? {
    id: user.id,
    socketClient: socket,
    usuario: user
  } : u)
  return true;
};
/////////////////////////////////////////////////////////////////////////
exports.desconectarCliente = (username) => usuariosChat = usuariosChat.filter(u => u.usuario.username != username);
/////////////////////////////////////////////////////////////////////////
exports.getClienteUsername = (username) => usuariosChat.filter(u => u.usuario.username == username)[0] || null;
/////////////////////////////////////////////////////////////////////////
exports.getClienteSocket = (socket) => usuariosChat.filter((cliente) => cliente.socketId == socket.id)[0] || {};
/////////////////////////////////////////////////////////////////////////
exports.armarClientesPartida = (clientesU) => usuariosChat.filter(usuario => !!clientesU.includes(usuario.usuario.username));
/////////////////////////////////////////////////////////////////////////
exports.getClientesOnline = () => usuariosChat.map(u => u.usuario.username);

exports.getClientesOnlineUsuario = () => usuariosChat.map(u => u);

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
