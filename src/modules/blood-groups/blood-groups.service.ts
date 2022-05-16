import { Injectable } from '@nestjs/common';
import { CreateBloodGroupDto } from './dto/create-blood-group.dto';
import { UpdateBloodGroupDto } from './dto/update-blood-group.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BloodGroup } from './entities/blood-group.entity';

@Injectable()
export class BloodGroupsService {
  constructor(
    @InjectModel(BloodGroup) private bloodGroupRepository: typeof BloodGroup,
  ) {}

  async create(createBloodGroupDto: CreateBloodGroupDto) {
    const bloodGroup = await this.bloodGroupRepository.create(
      createBloodGroupDto,
    );
    return bloodGroup;
  }

  async findAll() {
    const bloodGroup = await this.bloodGroupRepository.findAll({
      include: { all: true },
    });

    return bloodGroup;
  }

  async findOne(id: number) {
    const bloodGroup = await this.bloodGroupRepository.findOne({
      where: { id: id },
    });

    return bloodGroup;
  }

  async update(id: number, updateBloodGroupDto: UpdateBloodGroupDto) {
    const [numberOfAffectedRows, [updatedBloodGroup]] =
      await this.bloodGroupRepository.update(updateBloodGroupDto, {
        where: { id: id },
        returning: true,
      });
    return { numberOfAffectedRows, updatedBloodGroup };
  }

  async remove(id: number) {
    return await this.bloodGroupRepository.destroy({
      where: { id: id },
    });
  }
}
