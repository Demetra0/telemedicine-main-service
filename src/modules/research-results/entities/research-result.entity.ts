import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ResearchResult as ResearchResultCreationAttrs } from '../interfaces/research-result.interface';
import { Patient } from '../../patients/entities/patient.entity';
import { TypeOfResearch } from '../../type-of-research/entities/type-of-research.entity';

@Table({ tableName: 'research_results' })
export class ResearchResult extends Model<
  ResearchResult,
  ResearchResultCreationAttrs
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  result: string;

  @Column({ type: DataType.STRING, allowNull: false })
  pathToFile: string;

  @Column({ type: DataType.DATE, allowNull: false })
  date: string;

  @ForeignKey(() => Patient)
  @Column({ type: DataType.INTEGER })
  patientId: number;

  @ForeignKey(() => TypeOfResearch)
  @Column({ type: DataType.INTEGER })
  typeOfResearchId: number;
}
