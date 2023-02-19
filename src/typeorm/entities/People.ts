import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Ticket } from "./Ticket";

@Entity({name: 'people'})
export class People{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    surname: string;

    @OneToMany(() => Ticket, (ticket) => ticket.people)
    tickets: Ticket[];
}