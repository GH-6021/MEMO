import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Memo{
@PrimaryGeneratedColumn()
id:number;

@Column()
title:string;

@Column()
content:string;
}