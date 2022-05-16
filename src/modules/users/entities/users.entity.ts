import {
  Model,
  Table,
  Column,
  DataType,
  HasOne,
  BeforeCreate,
} from 'sequelize-typescript';
import { User as UserCreationAttrs } from '../interfaces/user.interface';
import { Doctor } from '../../doctors/entities/doctor.entity';
import { Patient } from '../../patients/entities/patient.entity';
import * as bcrypt from 'bcrypt';
const saltRounds = 10;

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @Column({
    type: DataType.STRING,
    unique: true,
    primaryKey: true,
    allowNull: false,
  })
  snils: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  phoneNumber: string;

  @Column({ type: DataType.STRING, allowNull: false })
  firstName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  lastName: string;

  @Column({ type: DataType.STRING, allowNull: false })
  patronymic: string;

  @Column({ type: DataType.STRING, allowNull: false })
  gender: string;

  @Column({ type: DataType.DATE, allowNull: false })
  dateOfBirth: string;

  @Column({ type: DataType.STRING, allowNull: false })
  city: string;

  @Column({ type: DataType.STRING, allowNull: false })
  street: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  houseNumber: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  apartmentNumber: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  postalCode: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  passportSeries: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  passportNumber: number;

  @Column({ type: DataType.STRING, allowNull: false })
  whoIssuedPassport: string;

  @Column({ type: DataType.DATE, allowNull: false })
  dateIssueOfThePassport: string;

  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @HasOne(() => Doctor)
  doctor: Doctor;

  @HasOne(() => Patient)
  patient: Patient;

  @BeforeCreate
  static hashPassword(user: User) {
    if (user.password) {
      const salt = bcrypt.genSaltSync(saltRounds);
      user.password = bcrypt.hashSync(user.password, salt);
    }
  }
}
