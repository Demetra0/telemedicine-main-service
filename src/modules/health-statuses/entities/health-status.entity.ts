import {
  Model,
  Column,
  DataType,
  ForeignKey,
  Table,
  HasMany,
} from 'sequelize-typescript';
import { HealthStatus as HealthStatusCreationAttrs } from '../interfaces/health-status.interface';
import { Doctor } from '../../doctors/entities/doctor.entity';
import { HealthMonitoring } from '../../health-monitorings/entities/health-monitoring.entity';

@Table({ tableName: 'health_statuses' })
export class HealthStatus extends Model<
  HealthStatus,
  HealthStatusCreationAttrs
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  status: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  description: string;

  @ForeignKey(() => Doctor)
  @Column({ type: DataType.INTEGER })
  doctorId: number;

  @HasMany(() => HealthMonitoring)
  healthMonitoring: HealthMonitoring;
}
