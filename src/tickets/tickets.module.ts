import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from 'src/typeorm/entities/People';
import { Ticket } from 'src/typeorm/entities/Ticket';
import { TicketsController } from './controllers/tickets/tickets.controller';
import { TicketsService } from './services/tickets/tickets.service';

@Module({
  imports: [TypeOrmModule.forFeature([Ticket, People])],
  controllers: [TicketsController],
  providers: [TicketsService]
})
export class TicketsModule {}
