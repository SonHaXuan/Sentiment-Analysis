<!-- ABOUT THE PROJECT -->
## About The Project
...
<p align="right">(<a href="#top">back to top</a>)</p>

### Prerequisites

Make sure you have installed all of the following prerequisites on your development machine:
* Node >= 10
* Python >= 3.8.0
* Mongodb
### Installation

_If you wish to run the tutorial, you can use the following commands_

1. Clone the repo
   ```sh
   git clone https://github.com/SonHaXuan/Sentiment-Analysis.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Copy `.env-sample` to `.env` and Edit your variables by your setting
   ```js
   MONGODB_URL='ENTER MONGODB URL';
   GPT_MODEL='ENTER CHAT GPT MODEL';
   OPENAI_API_KEY='ENTER OPEN API KEY';
   ...
   ```
### Create collections for mongodb
Create `tweets` collection and use the files in <a href="https://github.com/SonHaXuan/Sentiment-Analysis/tree/main/dataset" target="_blank">/dataset</a> folder to import data to MongoDB

<p align="right">(<a href="#top">back to top</a>)</p>


## Usage

To start the project.

Command:

```sh
npm run start
```
After running this command the output will be generated in `output` folder

<p align="right">(<a href="#top">back to top</a>)</p>
