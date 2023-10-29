import { Test, TestingModule } from '@nestjs/testing';
import { GpsDataController } from './gps-data.controller';

describe('GpsDataController', () => {
  let controller: GpsDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GpsDataController],
    }).compile();

    controller = module.get<GpsDataController>(GpsDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
