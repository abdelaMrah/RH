import { Test, TestingModule } from '@nestjs/testing';
import { AbsenceTypeController } from './absence-type.controller';
import { AbsenceTypeService } from './absence-type.service';

describe('AbsenceTypeController', () => {
  let controller: AbsenceTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbsenceTypeController],
      providers: [AbsenceTypeService],
    }).compile();

    controller = module.get<AbsenceTypeController>(AbsenceTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
