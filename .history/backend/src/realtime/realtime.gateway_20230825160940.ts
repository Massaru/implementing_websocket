import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { Socket } from 'soc';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class RealtimeGateway {
  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any): string {
    return 'Hello world!';
  }
}
