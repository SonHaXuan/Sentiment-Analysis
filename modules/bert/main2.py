import torch
import json
from transformers import BertTokenizer, BertForSequenceClassification


file_path = './dataset/tweets-and-dates.json'

# Load the JSON file
with open(file_path, 'r') as f:
    tweets = json.load(f)

# Load pre-trained BERT model and tokenizer
model_name = 'bert-base-uncased'
tokenizer = BertTokenizer.from_pretrained(model_name)
model = BertForSequenceClassification.from_pretrained(model_name, num_labels=2)

result = []

# for tweet in tweets:
#   sentence = tweet['text']
#   date = tweet['date']

#   # Tokenize input sentence
#   inputs = tokenizer.encode_plus(sentence, add_special_tokens=True, return_tensors='pt')

#   # Forward pass through the model
#   outputs = model(inputs['input_ids'], token_type_ids=inputs['token_type_ids'])

#   # Get predicted sentiment
#   sentiment = torch.argmax(outputs.logits, dim=1)

#   # Mapping of sentiment labels (0: negative, 1: positive)
#   sentiment_labels = ['Negative', 'Positive']

#   # Print the sentiment prediction
#   # print(f"Sentence: {sentence}")
#   print(f"{date}+{sentiment_labels[sentiment]}")

#   result.append({"date": date, "sentiment": sentiment_labels[sentiment]})

jsonString = json.dumps(result)
jsonFile = open("./temp/tweets-bert-predict-2.json", "w")
jsonFile.write(jsonString)
jsonFile.close()

# print(result)