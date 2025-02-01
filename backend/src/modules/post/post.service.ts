import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/db.service';

@Injectable()
export class PostService {
  constructor(private readonly db: DatabaseService) {}
  list() {
    return this.db.post.findMany();
  }
  async create(data: any) {
    return this.db.post.create({ data });
  }
}
