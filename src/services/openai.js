import dotenv from "dotenv";
dotenv.config();

import { Configuration, OpenAIApi } from "openai";
import { ChatOpenAI } from "langchain/chat_models/openai";

import { MAX_TOKEN_OUTPUT } from "../helpers/constants.js";

const { OPENAI_API_KEY, GPT_MODEL } = process.env;

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const OpenAI = new OpenAIApi(configuration);

const chat = new ChatOpenAI({
  temperature: 0,
  openAIApiKey: OPENAI_API_KEY,
  maxToken: MAX_TOKEN_OUTPUT,
  modelName: GPT_MODEL,
});

export { OpenAI, chat };
