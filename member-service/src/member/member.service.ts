import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMemberInput } from './dto/create-member.input';
import { UpdateMemberInput } from './dto/update-member.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Member } from './entities/member.entity';

@Injectable()
export class MemberService {

  constructor(@InjectRepository(Member) private memberRepo:Repository<Member>){}

  async create(member:CreateMemberInput):Promise<Member>{
    let memb=this.memberRepo.create(member);
    return this.memberRepo.save(memb);
  }

  async findAll():Promise<Member[]>{
    return this.memberRepo.find(
      // { 
      //   relations:["cars"]
      // }
    );
  }

  async findOne(id: string): Promise<Member> {
    return this.memberRepo.findOne(id,
      // {relations:["cars"]}
      );
  }

  update(id:string,updateMemberInput:UpdateMemberInput){
    let member:Member= this.memberRepo.create(updateMemberInput);
    member.id=id;
    return this.memberRepo.save(member);

}

  async remove(id: string) {
    let memb = this.findOne(id)
    if (memb) {
      let ret = await this.memberRepo.delete(id)
      if (ret.affected === 1) {
        return memb;
      }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`)
  }
}
