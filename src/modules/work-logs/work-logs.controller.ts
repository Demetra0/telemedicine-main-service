import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorkLogsService } from './work-logs.service';
import { CreateWorkLogDto } from './dto/create-work-log.dto';
import { UpdateWorkLogDto } from './dto/update-work-log.dto';

@Controller('work-logs')
export class WorkLogsController {
  constructor(private readonly workLogsService: WorkLogsService) {}

  @Post()
  create(@Body() createWorkLogDto: CreateWorkLogDto) {
    return this.workLogsService.create(createWorkLogDto);
  }

  @Get()
  findAll() {
    return this.workLogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workLogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkLogDto: UpdateWorkLogDto) {
    return this.workLogsService.update(+id, updateWorkLogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workLogsService.remove(+id);
  }
}
