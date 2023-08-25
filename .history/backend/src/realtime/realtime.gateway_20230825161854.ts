import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class RealtimeGateway {
  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any): string {
    console.log(payload);
    client.broadcast.emit("messagein",`warning you about the message: {payload}`)
    return 'Hello world!';
  }
}
