import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Member } from './member.entity';

@ObjectType()
@Directive('@key(fields:"id")')
@Entity()
export class Car {

  @Field((type)=>ID)
  @PrimaryGeneratedColumn('uuid')
  id:string

  @Field()
  @Column()
  car_make:string

  @Field()
  @Column()
  car_model:string

  @Field()
  @Column()
  vin_number:string

  @Field()
  @Column()
  manufactured_date:string

  @Field((type)=>Member)
  member:Member

  @Column()
  @Field()
  memberID :string

}
