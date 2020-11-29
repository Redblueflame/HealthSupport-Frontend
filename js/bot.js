import socketio from "./socket-socketio";

export class Bot {
  path = 'rasa.healthassist.redbluefla.me/socket.io';
  socket = null;
  handler = (data) => {};
  connect = () => {
    this.socket = socketio(this.path)
    console.log("Created connection.")
    this.socket.on('bot_uttered', (data) => {
      this.handler(data)
    })
    this.socket.connect()
  }
  sendMessage = (content) => {
    this.socket.emit('user_uttered', content)
  }
}
