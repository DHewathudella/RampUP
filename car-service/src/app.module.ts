import { ApolloDriver, ApolloDriverConfig, ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { CarModule } from './car/car.module';
import { Member } from './car/entities/member.entity';


@Module({
    imports: [CarModule, GraphQLModule.forRoot<ApolloFederationDriverConfig>({
             driver: ApolloFederationDriver,
             autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
             buildSchemaOptions:{
               orphanedTypes:[Member]
             }
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
