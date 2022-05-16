import {
  Model,
  Column,
  DataType,
  ForeignKey,
  Table,
  HasMany,
} from 'sequelize-typescript';
import { User } from '../../users/entities/users.entity';
import { BloodGroup } from '../../blood-groups/entities/blood-group.entity';
import { Patient as PatientCreationAttrs } from '../interfaces/patients.interface';
import { HealthMonitoring } from '../../health-monitorings/entities/health-monitoring.entity';
import { DoctorsAppointmentLog } from '../../doctors-appointment-logs/entities/doctors-appointment-log.entity';
import { ResearchResult } from '../../research-results/entities/research-result.entity';

@Table({ tableName: 'patients' })
export class Patient extends Model<Patient, PatientCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  chiPolicySeries: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  chiPolicyNumber: number;

  @Column({ type: DataType.DATE, allowNull: false })
  dateIssueOfThePolicy: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.STRING })
  userId: string;

  @ForeignKey(() => BloodGroup)
  @Column({ type: DataType.INTEGER })
  bloodGroupId: number;

  @HasMany(() => HealthMonitoring)
  healthMonitorings: HealthMonitoring[];

  @HasMany(() => DoctorsAppointmentLog)
  doctorsAppointmentLogs: DoctorsAppointmentLog[];

  @HasMany(() => ResearchResult)
  researchResults: ResearchResult[];
}
