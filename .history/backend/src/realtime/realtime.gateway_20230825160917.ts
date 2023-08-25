import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class RealtimeGateway {
  @SubscribeMessage('message')
  handleMessage(client: socke, payload: any): string {
    return 'Hello world!';
  }
}
