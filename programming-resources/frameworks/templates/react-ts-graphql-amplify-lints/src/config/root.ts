const DUMMY_USER_ID = 'dummy_user_id';
const CHAT_BOT_ID = 'chat_bot_id';
const CHAT_BOT_NAME = 'BitCrayonAssistant';
const DEFAULT_MARKER_BEGINNING_MERMAID_CODE = '===start_mermaid===';
const DEFAULT_MARKER_ENDING_MERMAID_CODE = '===end_mermaid===';
const DEFAULT_RESPONSE_SYNTAX =
  DEFAULT_MARKER_BEGINNING_MERMAID_CODE +
  `{your_generated_code}` +
  DEFAULT_MARKER_ENDING_MERMAID_CODE;
const DEFAULT_GPT_MODEL = 'gpt-3.5-turbo';
const DEFAULT_GPT_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const DEFAULT_GUIDE_FOR_GENERATING_DIAGRAM = ' (describe using MermaidJS code)';
const NOTIFY_COPY_TO_CLIPBOARD = 'Copied to clipboard';
const DEFAULT_GUIDE_FOR_CHATBOT = `
You are ChatGPT, a large language model trained by OpenAI. 
MermaidJS provides some kind of graphs, you should format your responses in a random graph format.
Answer all the questions as concisely as possible using MermaidJS syntax wrap all your generated code in this syntax ${DEFAULT_RESPONSE_SYNTAX} .
Let's say: \`Hi! How can I help you today?\`
`;

export {
  DUMMY_USER_ID,
  CHAT_BOT_ID,
  CHAT_BOT_NAME,
  DEFAULT_GUIDE_FOR_CHATBOT,
  DEFAULT_GPT_MODEL,
  DEFAULT_GPT_ENDPOINT,
  NOTIFY_COPY_TO_CLIPBOARD,
  DEFAULT_GUIDE_FOR_GENERATING_DIAGRAM,
  DEFAULT_MARKER_BEGINNING_MERMAID_CODE,
  DEFAULT_MARKER_ENDING_MERMAID_CODE,
};
