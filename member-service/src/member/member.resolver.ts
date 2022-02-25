import { Resolver, Query, Mutation, Args, Int, ResolveReference } from '@nestjs/graphql';
import { MemberService } from './member.service';
import { Member } from './entities/member.entity';
import { CreateMemberInput } from './dto/create-member.input';
import { UpdateMemberInput } from './dto/update-member.input';

@Resolver(() => Member)
export class MemberResolver {
  constructor(private readonly memberService: MemberService) {}

  @Mutation(()=>Member,{name:"createMember"})
  create(@Args('memberInput')member:CreateMemberInput){
      return this.memberService.create(member);
  }

  @Query(()=>[Member],{name:"getAllMembers"})
  findAll(){
      return this.memberService.findAll();
  }

  @Query(() => Member, { name: 'member' })
  findOne(@Args('id') id: string) {
    return this.memberService.findOne(id);
  }


  @Mutation(()=>Member)
  updateMember(@Args('member')member:UpdateMemberInput){
      return this.memberService.update(member.id,member);
  }

  @ResolveReference()
  resolvereferance(ref: { __typename: string, id: string }) {
    return this.memberService.findOne(ref.id);
  }
}
