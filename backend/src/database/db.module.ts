import { Module } from '@nestjs/common';
import { DatabaseService } from './db.service';

@Module({
  imports: [],
  controllers: [],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}