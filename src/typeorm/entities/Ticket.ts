import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { People } from "./People";

@Entity({name: 'ticket'})
export class Ticket{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    showName: string;

    @Column({unique: true})
    place: number;

    @ManyToOne(() => People, (people) => people.tickets, {onDelete: 'CASCADE', onUpdate: 'CASCADE'})
    people: People;
}