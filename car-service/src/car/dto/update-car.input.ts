import { CreateCarInput } from './create-car.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCarInput extends PartialType(CreateCarInput) {
  @Field()
  id:string

  @Field()
  car_make:string

  @Field()
  car_model:string

  @Field()
  vin_number:string

  @Field()
  manufactured_date:string
}
