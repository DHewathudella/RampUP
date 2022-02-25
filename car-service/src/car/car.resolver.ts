import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { CarService } from './car.service';
import { Car } from './entities/car.entity';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';
import { Member } from './entities/member.entity';

@Resolver(() => Car)
export class CarResolver {
  constructor(private readonly carService: CarService) {}

  @Mutation(() => Car,{name:"createCar"})
  createCar(@Args('createCarInput') createCarInput: CreateCarInput) {
    return this.carService.create(createCarInput);
  }

  @Query(() => [Car], { name: 'getAllCars' })
  findAll() {
    return this.carService.findAll();
  }

  @Query(() => Car, { name: 'car' })
  findOne(@Args('id') id: string) {
    return this.carService.findOne(id);
  }

  @Mutation(() => Car)
  updateCar(@Args('updateCarInput') updateCarInput: UpdateCarInput) {
    return this.carService.update(updateCarInput.id, updateCarInput);
  }

  @Mutation(() => Car)
  removeCar(@Args('id') id: string) {
    return this.carService.remove(id);
  }

  @ResolveField((of)=>Member)
  member (@Parent() car:Car){
    return {__typename:"Member",id:car.memberID}   
  }
}
