import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Column } from "typeorm";
import { Car } from "./car.entity";


@ObjectType()
@Directive('@extends')
@Directive('@key(fields:"id")') 
export class Member{

    @Field((type)=>ID)
    @Directive('@external')
    id:string

    @Field((type)=> [Car])
    cars:Car[]
}