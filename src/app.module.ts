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
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '6675',
    database: 'TicketsPeoplesLab1',
    entities: [Ticket, People],
    synchronize: true,
  }), TicketsModule, PeoplesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
