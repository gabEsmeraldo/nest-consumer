import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service.js';
import { jobDTO } from './job.dto.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  async postJob(@Body() data: jobDTO): Promise<string> {
    console.log('requested')
    console.log(data.id)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('returned')
    return 'hello world!';
  }
}
