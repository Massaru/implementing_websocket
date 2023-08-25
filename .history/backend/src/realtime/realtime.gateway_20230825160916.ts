import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class RealtimeGateway {
  @SubscribeMessage('message')
  handleMessage(client: sock, payload: any): string {
    return 'Hello world!';
  }
}
