import axios from 'axios';
import { CompletionOptions, GPTMessage } from 'helpers/chatgpt/type';
import { DEFAULT_GPT_ENDPOINT, DEFAULT_GPT_MODEL } from '../../../config/root';

const getCompletion = async (
  userRequestedMessage?: GPTMessage[] | null,
  options?: CompletionOptions
) => {
  if (!userRequestedMessage) {
    return new Error('Requested message not found.');
  }

  let payload = {
    model: DEFAULT_GPT_MODEL,
    max_tokens: 500,
    messages: userRequestedMessage,
  };
  return await axios({
    method: 'POST',
    url: DEFAULT_GPT_ENDPOINT,
    data: payload,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_OPEN_API_KEY,
    },
  });
};

export { getCompletion };
