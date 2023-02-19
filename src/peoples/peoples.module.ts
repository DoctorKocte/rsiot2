import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TicketsModule } from 'src/tickets/tickets.module';
import { People } from 'src/typeorm/entities/People';
import { Ticket } from 'src/typeorm/entities/Ticket';
import { PeoplesController } from './controllers/peoples/peoples.controller';
import { PeoplesService } from './services/peoples/peoples.service';

@Module({
  imports: [TypeOrmModule.forFeature([People, Ticket]), TicketsModule],
  controllers: [PeoplesController],
  providers: [PeoplesService]
})
export class PeoplesModule {}
