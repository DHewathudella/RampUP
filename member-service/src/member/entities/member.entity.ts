import { Directive, Field, ID, ObjectType } from "@nestjs/graphql"
//import { Car } from "src/car/entities/car.entity"
import { Column, Entity,OneToMany, PrimaryGeneratedColumn } from "typeorm"



@ObjectType()
@Directive('@key(fields:"id")') 
@Entity()
export class Member{
    @Field((type)=>ID)
    @PrimaryGeneratedColumn('uuid')
    id:string
    @Field()
    @Column()
    first_name:string
    @Field()
    @Column()
    last_name:string
    @Field()
    @Column()
    email:string

    
  // @OneToMany(()=>Car, car=>car.member)
  // @Field(()=>[Car])
  // cars:Car[]
}
