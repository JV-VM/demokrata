import { DatabaseService } from 'src/database/db.service';
export declare class PostService {
    private readonly db;
    constructor(db: DatabaseService);
    list(): import("@prisma/client").Prisma.PrismaPromise<{
        id: number;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    create(data: any): Promise<{
        id: number;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
