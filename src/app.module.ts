import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { EventModule } from './event/event.module';

@Module({
  imports: [UserModule, PrismaModule, EventModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
