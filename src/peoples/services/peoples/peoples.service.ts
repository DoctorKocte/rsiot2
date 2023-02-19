import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { People } from 'src/typeorm/entities/People';
import { CreatePeopleParams, CreateTicketParams, UpdatePeopleParams } from 'src/utils/types';
import { Repository } from 'typeorm';
import { TicketsService } from 'src/tickets/services/tickets/tickets.service';
import { Ticket } from 'src/typeorm/entities/Ticket';
import { CreateTicketDto } from 'src/tickets/dtos/CreateTicket.dto';

@Injectable()
export class PeoplesService {

    constructor(
    @InjectRepository(People) private peopleRepository:Repository<People>,
    @InjectRepository(Ticket) private ticketRepository:Repository<Ticket>
    ) {}

    findPeoples() {
        return this.peopleRepository.find()
    }

    createPeople(peopleDetails: CreatePeopleParams) {
        const newPeople = this.peopleRepository.create({...peopleDetails});
        return this.peopleRepository.save(newPeople);
    }

    deletePeople(id: number){
        return this.peopleRepository.delete({id});
    }
    
    async createPeopleTicket(id: number, 
        createTicketParams : CreateTicketParams) {

            const people = await this.peopleRepository.findOneBy({id});
            if(!people)
            throw new HttpException(
                'Not Found',
                HttpStatus.BAD_REQUEST
            )
        const newUser = this.ticketRepository.create({...createTicketParams, people, });
        return this.ticketRepository.save(newUser)
     }
  
    updatePeople(id: number, updatePeopleDetails: UpdatePeopleParams){
        return this.peopleRepository.update({id}, {...updatePeopleDetails});
     }

    async addTicketToPeople(idg:number, ids:number){
        const people = await this.peopleRepository.findOneBy({id: idg});
        if(!people)
        throw new HttpException(
            'Not Found',
            HttpStatus.BAD_REQUEST
        )

        const ticket = await this.ticketRepository.findOneBy({id: ids});
        if(!ticket)
        throw new HttpException(
            'Not Found',
            HttpStatus.BAD_REQUEST
        )
        return this.ticketRepository.update({id:ids}, {people});

    } 
     
}
