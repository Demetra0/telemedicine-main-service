import { Injectable } from '@nestjs/common';
import { CreateWorkLogDto } from './dto/create-work-log.dto';
import { UpdateWorkLogDto } from './dto/update-work-log.dto';

@Injectable()
export class WorkLogsService {
  create(createWorkLogDto: CreateWorkLogDto) {
    return 'This action adds a new workLog';
  }

  findAll() {
    return `This action returns all workLogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workLog`;
  }

  update(id: number, updateWorkLogDto: UpdateWorkLogDto) {
    return `This action updates a #${id} workLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} workLog`;
  }
}
