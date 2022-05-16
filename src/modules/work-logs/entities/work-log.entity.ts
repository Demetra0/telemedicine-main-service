import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Doctor } from '../../doctors/entities/doctor.entity';
import { WorkLog as WorkLogCreationAttrs } from '../interfaces/work-log.interface';

@Table({ tableName: 'work_logs' })
export class WorkLog extends Model<WorkLog, WorkLogCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  startTime: string;

  @Column({ type: DataType.STRING })
  endTime: string;

  @ForeignKey(() => Doctor)
  @Column({ type: DataType.INTEGER, allowNull: false })
  doctorId: number;
}
