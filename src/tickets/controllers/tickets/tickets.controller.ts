import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateTicketDto } from 'src/tickets/dtos/CreateTicket.dto';
import { UpdateTicketDto } from 'src/tickets/dtos/UpdateTicket.dto';
import { TicketsService } from 'src/tickets/services/tickets/tickets.service';

@Controller('tickets')
export class TicketsController {

    constructor(private ticketService: TicketsService){}

    @Get()
    async getTickets() {
        const tickets = await this.ticketService.findTickets();
        return tickets;
    }

    @Post()
    createTicket(@Body() createTicketDto:
    CreateTicketDto ) {
        return this.ticketService.createTicket(createTicketDto);
    }

    @Put(':id')
    async updateUserById(@Param('id', ParseIntPipe) id: number, @Body()updateTicketDto:UpdateTicketDto){
       await this.ticketService.updateTicket(id, updateTicketDto);
    }

    @Delete(':id')
    async deleteUserById(@Param('id', ParseIntPipe) id: number){
        await this.ticketService.deleteTicket(id);
     }
}
