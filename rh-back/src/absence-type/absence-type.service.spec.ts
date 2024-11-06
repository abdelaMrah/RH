import { Test, TestingModule } from '@nestjs/testing';
import { AbsenceTypeService } from './absence-type.service';

describe('AbsenceTypeService', () => {
  let service: AbsenceTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbsenceTypeService],
    }).compile();

    service = module.get<AbsenceTypeService>(AbsenceTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
