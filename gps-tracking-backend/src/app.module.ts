import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GpsDataService } from './gps-data/gps-data.service';
import { GpsDataController } from './gps-data/gps-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Arch_1004901 } from 'entities/Arch_1004901';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'gpstrackerdb',
      entities: ['./entities/*{.ts,.js}'],
      synchronize: false, // Set to false in production
    }),
    TypeOrmModule.forFeature([Arch_1004901]),
  ],
  controllers: [AppController, GpsDataController],
  providers: [AppService, GpsDataService],
})
export class AppModule {}
