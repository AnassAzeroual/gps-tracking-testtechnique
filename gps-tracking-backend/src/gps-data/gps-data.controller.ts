import { Controller, Get } from '@nestjs/common';
import { GpsDataService } from './gps-data.service';
import { Arch_1004901 } from 'entities/Arch_1004901';

@Controller('gps-data')
export class GpsDataController {
  constructor(private srv: GpsDataService) {}

  @Get()
  getAll(): Promise<Arch_1004901[]> {
    return this.srv.getAll();
  }
}
