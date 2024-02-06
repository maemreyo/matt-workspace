export enum Role {
  System = 'system',
  User = 'user',
  Assistant = 'assistant',
}

export interface GPTMessage {
  role?: Role;
  content?: string;
}

export interface CompletionOptions {
  maxTokens: number;
  model: string;
}
