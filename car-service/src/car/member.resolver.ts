import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { CarService } from "./car.service";
import { Car } from "./entities/car.entity";
import { Member } from "./entities/member.entity";

@Resolver((of)=>Member)
export class MemberResolver{

    constructor(private readonly carService:CarService){}  

    @ResolveField((of)=>[Car])
    cars(@Parent() member:Member):Promise<Car[]>{
        return this.carService.forMember(member.id); 
    }

}