import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from 'src/typeorm/entities/Ticket';
import { CreateTicketParams, UpdateTicketParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class TicketsService {

    constructor(@InjectRepository(Ticket) 
    private ticketRepository:Repository<Ticket>,
    ) {}

    findTickets() {
        return this.ticketRepository.find({relations: ['people']})
    }

    createTicket(ticketDetails: CreateTicketParams) {
        const newTicket = this.ticketRepository.create({...ticketDetails});
        return this.ticketRepository.save(newTicket);
    }

    updateTicket(id: number, updateTicketDetails: UpdateTicketParams){
       return this.ticketRepository.update({id}, {...updateTicketDetails});
    }

    deleteTicket(id: number){
        return this.ticketRepository.delete({id});
     }
}
