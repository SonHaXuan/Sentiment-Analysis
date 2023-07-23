import { encode } from "gpt-3-encoder";
import { BertTokenizer } from "bert-tokenizer";

// Create an instance of the tokenizer
const tokenizer = new BertTokenizer();

function removeRewlines(content) {
  content = content.replace("/\n/g", " ");
  content = content.replace(/\s+/g, " ");
  return content;
}

function numTokens(text) {
  return encode(text).length;
}

function numBertTokens(text) {
  // Tokenize the sentence
  const tokens = tokenizer.tokenize(text);

  // Get the number of tokens
  const numTokens = tokens.length;

  return numTokens;
}

export { removeRewlines, numTokens, numBertTokens };
