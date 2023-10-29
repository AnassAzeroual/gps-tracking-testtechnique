import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Arch_1004901 } from 'entities/Arch_1004901';
import { Repository } from 'typeorm';

@Injectable()
export class GpsDataService {
  constructor(
    @InjectRepository(Arch_1004901)
    private repoArch_1004901: Repository<Arch_1004901>,
  ) {}

  async getAll(): Promise<Arch_1004901[]> {
    return await this.repoArch_1004901.find({
      order: { date: 'DESC' },
    });
  }
}
