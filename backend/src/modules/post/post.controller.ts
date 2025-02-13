import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDTO } from './post.dto';

@ApiTags('Posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}
  @Get()
  async list() {
    return this.postService.list();
  }
  @Post()
  async create(@Body() input: CreatePostDTO) {
    return this.postService.create(input);
  }
}
