import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { DoctorsModule } from './modules/doctors/doctors.module';
import { BloodGroupsModule } from './modules/blood-groups/blood-groups.module';
import { WorkLogsModule } from './modules/work-logs/work-logs.module';
import { HealthMonitoringsModule } from './modules/health-monitorings/health-monitorings.module';
import { DoctorsAppointmentLogsModule } from './modules/doctors-appointment-logs/doctors-appointment-logs.module';
import { ResearchResultsModule } from './modules/research-results/research-results.module';
import { TypeOfResearchModule } from './modules/type-of-research/type-of-research.module';
import { HealthStatusesModule } from './modules/health-statuses/health-statuses.module';
import { PostgresDatabaseProviderModule } from './providers/database/postgres/provider.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    UsersModule,
    AuthModule,
    DoctorsModule,
    BloodGroupsModule,
    WorkLogsModule,
    HealthMonitoringsModule,
    DoctorsAppointmentLogsModule,
    ResearchResultsModule,
    TypeOfResearchModule,
    HealthStatusesModule,
    PostgresDatabaseProviderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
