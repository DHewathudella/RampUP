import { IntrospectAndCompose } from '@apollo/gateway';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [ GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
    driver: ApolloGatewayDriver,
    server: {
      // ... Apollo server options
      cors: true,
    },
    gateway: {
      supergraphSdl: new IntrospectAndCompose({
        subgraphs: [
          { name: "members", url: "http://localhost:3000/graphql"},
          { name: "cars", url: "http://localhost:3001/graphql" },
        ],
      }),
      
    },
  }),
   
  ], 
  controllers: [],
  providers: [],
})
export class AppModule {}
