// import { Injectable } from '@nestjs/common';
// import { NeuralNetworkModel } from './interfaces/model.interface';
// import { OpenAIModel } from './implementations/openai.model';
// import { GoogleGeminiModel } from './implementations/google-gemini.model';

// @Injectable()
// export class ModelFactory {
//   createModel(name: string, apiKey: string): NeuralNetworkModel {
//     switch (name) {
//       case 'gpt-4':
//       case 'gpt-4o':
//         return new OpenAIModel(apiKey, name);
//       case 'gemini-1.5-flash':
//         return new GoogleGeminiModel(apiKey, name);
//       default:
//         throw new Error(`Model ${name} is not supported`);
//     }
//   }
// }


import { Injectable } from '@nestjs/common';
import { NeuralNetworkModel } from './interfaces/model.interface';
import { OpenAIModel } from './implementations/openai.model';
import { GoogleGeminiModel } from './implementations/google-gemini.model';

@Injectable()
export class ModelFactory {
  createModel(name: string, apiKey: string): NeuralNetworkModel {
    switch (name) {
      case 'gpt-4':
      case 'gpt-4o':
        return new OpenAIModel(apiKey, name);
      case 'gemini-1.5-flash':
        return new GoogleGeminiModel(apiKey, name);
      default:
        throw new Error(`Model ${name} is not supported`);
    }
  }
}
