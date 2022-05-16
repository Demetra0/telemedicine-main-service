import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript';
import { ResearchResult } from '../../research-results/entities/research-result.entity';
import { TypeOfResearch as TypeOfResearchCreationAttr } from '../interfaces/type-of-research.inteface';

@Table({ tableName: 'type_of_study' })
export class TypeOfResearch extends Model<
  TypeOfResearch,
  TypeOfResearchCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  type: string;

  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @HasMany(() => ResearchResult)
  researchResult: ResearchResult[];
}
