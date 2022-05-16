import { Model, Column, DataType, HasMany, Table } from 'sequelize-typescript';
import { BloodGroup as BloodGroupCreationAttrs } from '../interfaces/blood-group.interface';
import { Patient } from '../../patients/entities/patient.entity';

@Table({ tableName: 'blood_groups' })
export class BloodGroup extends Model<BloodGroup, BloodGroupCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  group: string;

  @HasMany(() => Patient)
  patient: Patient[];
}
