import {
  Model,
  Column,
  DataType,
  Table,
  ForeignKey,
} from 'sequelize-typescript';
import { Doctor } from '../../doctors/entities/doctor.entity';
import { HealthStatus } from '../../health-statuses/entities/health-status.entity';
import { Patient } from '../../patients/entities/patient.entity';
import { HealthMonitoring as HealthMonitoringCreationAttrs } from '../interfaces/health_monitoring.interface';

@Table({ tableName: 'health_monitorings' })
export class HealthMonitoring extends Model<
  HealthMonitoring,
  HealthMonitoringCreationAttrs
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  diagnosis: string;

  @ForeignKey(() => HealthStatus)
  @Column({ type: DataType.INTEGER })
  healthStatusId: number;

  @ForeignKey(() => Doctor)
  @Column({ type: DataType.INTEGER })
  doctorId: number;

  @ForeignKey(() => Patient)
  @Column({ type: DataType.INTEGER })
  patientId: number;
}
