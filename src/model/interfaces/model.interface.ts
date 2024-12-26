export interface NeuralNetworkModel {
    getName(): string;
    generateResponse(prompt: string, imageOptions?: { image?: Buffer; mimeType?: string }): Promise<string>;
  }
  