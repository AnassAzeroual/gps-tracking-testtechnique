import { Test, TestingModule } from '@nestjs/testing';
import { GpsDataService } from './gps-data.service';

describe('GpsDataService', () => {
  let service: GpsDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GpsDataService],
    }).compile();

    service = module.get<GpsDataService>(GpsDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
