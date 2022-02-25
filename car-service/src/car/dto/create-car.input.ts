import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCarInput {

  @Field()
  car_make:string

  @Field()
  car_model:string

  @Field()
  vin_number:string

  @Field()
  manufactured_date:string
}
