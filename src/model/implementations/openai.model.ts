import { NeuralNetworkModel } from '../interfaces/model.interface';
import OpenAI from 'openai';

export class OpenAIModel implements NeuralNetworkModel {
  private openai: OpenAI;

  constructor(private apiKey: string, private model: string) {
    this.apiKey = this.apiKey;
    console.log(`Testing with API key: ${this.apiKey}`); 
    this.openai = new OpenAI({
      apiKey: this.apiKey,
    });
  }

  getName(): string {
    return this.model;
  }

  async generateResponse(
    prompt: string,
    options?: { image?: Buffer; mimeType?: string } 
  ): Promise<string> {
    const messages: any[] = [{ role: 'user', content: [{ type: 'text', text: prompt }] }];
    if (options?.image && options?.mimeType) {
      messages[0].content.push({
        type: 'image_url',
        image_url: {
          url: `data:${options.mimeType};base64,${options.image.toString('base64')}`,
        },
      });
    }

    const response = await this.openai.chat.completions.create({
      model: this.model,
      messages,
    });

    return response.choices[0]?.message?.content || 'No response';
  }
}

