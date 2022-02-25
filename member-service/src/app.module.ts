import { ApolloDriver, ApolloDriverConfig, ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { MemberModule } from './member/member.module';


@Module({


  imports: [MemberModule,GraphQLModule.forRoot<ApolloFederationDriverConfig>({
    driver: ApolloFederationDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      }),
      TypeOrmModule.forRoot({
          type:'postgres',
          host:'Localhost',
          port: 5432,
          username:'postgres',
          password:'dilan',
          database:'automobileDB',
          entities:["dist/**/*.entity{.ts,.js}"],
          synchronize:true
      }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
