import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customer/entities/customer.entity';
import { Bread } from './breads/entities/bread.entity';
import { BreadsModule } from './breads/breads.module';
import { CustomerModule } from './customer/customer.module';
import { DrinksModule } from './drinks/drinks.module';
import { Drink } from './drinks/entities/drink.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'Breads',
      entities: [Bread, Customer, Drink],
      synchronize: true,
    }),
    BreadsModule,
    CustomerModule,
    DrinksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
