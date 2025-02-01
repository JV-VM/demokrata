import { PostService } from './post.service';
import { CreatePostDTO } from './post.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    list(): Promise<{
        id: number;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    create(input: CreatePostDTO): Promise<{
        id: number;
        content: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
