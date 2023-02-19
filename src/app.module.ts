import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsModule } from './tickets/tickets.module';
import { PeoplesModule } from './peoples/peoples.module';
import { Ticket } from './typeorm/entities/Ticket';
import { People } from './typeorm/entities/People';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: '35.228.42.189',
    username: 'root',
    password: '123456',
    port:3306,
    database:'TicketsPeoples',
    entities: [Ticket, People],
    synchronize: true,
  }), TicketsModule, PeoplesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
