import { Controller, Get, Post, Body, Delete, Param, ParseIntPipe, Put, Patch } from '@nestjs/common';
import { PeoplesService } from 'src/peoples/services/peoples/peoples.service';
import { CreatePeopleDto } from 'src/tickets/dtos/CreatePeople.dto';
import { CreateTicketDto } from 'src/tickets/dtos/CreateTicket.dto';
import { UpdatePeopleDto } from 'src/tickets/dtos/UpdatePeople.dto';

@Controller('peoples')
export class PeoplesController {

    constructor(private peopleService: PeoplesService){}

    @Get()
    async getPeoples() {
        const tickets = await this.peopleService.findPeoples();
        return tickets;
    }

    @Post()
    createTicket(@Body() createPeopleDto:
    CreatePeopleDto ) {
        return this.peopleService.createPeople(createPeopleDto);
    }

    @Delete(':id')
    async deleteUserById(@Param('id', ParseIntPipe) id: number){
        await this.peopleService.deletePeople(id);
     }


     @Post(':id/tickets')
     createPeopleTicket(
        @Param('id', ParseIntPipe) id: number, 
        @Body() createTicketDto: CreateTicketDto) {
            return this.peopleService.createPeopleTicket(id, createTicketDto)
        }

    @Put(':id')
    async updatePeopleById(@Param('id', ParseIntPipe) id: number, @Body()updateTicketDto:UpdatePeopleDto){
       await this.peopleService.updatePeople(id, updateTicketDto);
    }

    @Patch(':idg/tickets/:ids')
    async addTicketToPeople(@Param('idg', ParseIntPipe) idg: number,
    @Param('ids', ParseIntPipe) ids: number){
        await this.peopleService.addTicketToPeople(idg, ids);
    }
     
}
