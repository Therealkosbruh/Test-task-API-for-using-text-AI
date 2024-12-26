import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Model } from './entities/model.entity';
import { ModelFactory } from './model.factory';
import { GoogleGeminiModel } from './implementations/google-gemini.model'; // Импортируем GoogleGeminiModel

@Injectable()
export class ModelService {
  constructor(
    @InjectRepository(Model)
    private readonly modelRepository: Repository<Model>,
    private readonly modelFactory: ModelFactory,
  ) {}

  async generate(
    modelType: string,
    name: string,
    prompt: string,
    options: any,
    apiKey: string,
    image?: string, 
    mimeType?: string, 
  ): Promise<string> {
    let modelInstance;

    if (modelType === 'google') {
      modelInstance = new GoogleGeminiModel(apiKey, name);
    } else {
      modelInstance = this.modelFactory.createModel(name, apiKey);
    }

    const imageOptions = image && mimeType ? { image: Buffer.from(image, 'base64'), mimeType } : undefined;

    return await modelInstance.generateResponse(prompt, { ...options, ...imageOptions });
  }

  async addModel(modelData: Partial<Model>): Promise<Model> {
    const model = this.modelRepository.create(modelData);
    return await this.modelRepository.save(model);
  }

  async getAllModels(): Promise<Model[]> {
    return await this.modelRepository.find();
  }

  async getModelById(id: number): Promise<Model> {
    return await this.modelRepository.findOne({ where: { id } });
  }
}
