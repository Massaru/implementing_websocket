import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class RealtimeGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  users: number = 0;

  handleDisconnect(client: any) {
    this.users--;
    this.client.emit('users', this.users);
  }
  handleConnection(client: any, ...args: any[]) {
    this.users++;
    this.client.emit('users', this.users);
  }
  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any): string {
    console.log(payload);
    client.broadcast.emit(
      'messagein',
      `warning you about the message: ${payload}`,
    );
    return 'Hello world!';
  }
}
