import { Controller, Post, Body, Get, NotFoundException } from '@nestjs/common';
import { ModelService } from './model.service';
import { Model } from './entities/model.entity';

@Controller('models')
export class ModelController {
  constructor(private readonly modelService: ModelService) {}

  @Post('generate')
  async generate(
    @Body() body: {
      modelId: number;
      prompt: string;
      options?: any;
      image?: string; 
      mimeType?: string; 
    },
  ) {
    const { modelId, prompt, options, image, mimeType } = body;

    const model = await this.modelService.getModelById(modelId);

    if (!model) {
      throw new NotFoundException('Model not found');
    }

    return await this.modelService.generate(
      model.name,
      prompt,
      options,
      model.apiKey,
      image,
      mimeType,
    );
  }

  @Post()
  async addModel(@Body() body: Partial<Model>) {
    return await this.modelService.addModel(body);
  }

  @Get()
  async getAllModels() {
    return await this.modelService.getAllModels();
  }
}
