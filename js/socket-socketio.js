import io from 'socket.io-client';

export default function (socketUrl) {
  const socket = io(socketUrl, {transports: ['websocket']});
  socket.on('connect', () => {
    console.log(`connect:${socket.id}`);

    socket.emit('session_request', {session_id: socket.id})

  });

  socket.on('connect_error', (error) => {
    console.log(error);
  });

  socket.on('error', (error) => {
    console.log(error);
  });

  socket.on('disconnect', (reason) => {
    console.log(reason);
  });
  console.log("Created connection.")
  return socket;
}
