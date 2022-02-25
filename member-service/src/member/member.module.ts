 import { Module } from '@nestjs/common';
import { MemberService } from './member.service';
import { MemberResolver } from './member.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Member])],
  providers: [MemberService, MemberResolver],
  exports:[MemberService]
})
export class MemberModule {}
 