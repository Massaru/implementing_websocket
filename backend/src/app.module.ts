import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RealtimeGateway } from './realtime/realtime.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RealtimeGateway],
})
export class AppModule {}
