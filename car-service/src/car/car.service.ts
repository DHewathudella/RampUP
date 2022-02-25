import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarInput } from './dto/create-car.input';
import { UpdateCarInput } from './dto/update-car.input';
import { Car } from './entities/car.entity';

@Injectable()
export class CarService {
  constructor(@InjectRepository(Car) private carRepo:Repository<Car>){}

  async create(carInput: CreateCarInput):Promise<Car> {
    let newCar=this.carRepo.create(carInput);
    return this.carRepo.save(newCar) ;
  }

  async findAll():Promise<Car[]> {
    return this.carRepo.find();
  }

  async findOne(id: string):Promise<Car> {
    return this.carRepo.findOne(id);
  }

  update(id: string, updateCarInput: UpdateCarInput) {
    let updatedCar:Car=this.carRepo.create(updateCarInput);
    updatedCar.id=id;
    return this.carRepo.save(updatedCar);
  }

  async remove(id: string) {
    let car= this.findOne(id);
    if(car){
      let ret= await this.carRepo.delete(id);
      if(ret.affected === 1){
        return car;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`);
  }

  async forMember(id:string ){
    return await this.carRepo.find({"memberID":id} )
  }
}
