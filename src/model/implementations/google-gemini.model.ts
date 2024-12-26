import { NeuralNetworkModel } from '../interfaces/model.interface';
import { GoogleGenerativeAI } from '@google/generative-ai';
import * as fs from 'fs';

export class GoogleGeminiModel implements NeuralNetworkModel {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor(private apiKey: string, private modelName: string) {
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({ model: modelName });
  }

  getName(): string {
    return this.modelName;
  }

  async generateResponse(prompt: string, imageOptions?: { image?: Buffer; mimeType?: string }): Promise<string> {
    const input: any[] = [prompt];

    if (imageOptions?.image && imageOptions?.mimeType) {
      input.push({
        inlineData: {
          data: imageOptions.image.toString('base64'),
          mimeType: imageOptions.mimeType,
        },
      });
    }

    const result = await this.model.generateContent(input);
    return result.response.text();
  }
}
