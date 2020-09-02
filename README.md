<img src="https://raw.githubusercontent.com/L3ts-H4ck/sayme-messenger/master/Pink%20and%20Blue%20Abstract%20Moms%20Influencer%20Freestyle%20Art%20Facebook%20Cover.png" width="100%" title="hover text">

# 🎒 Sayme 📚

**A messenger attendance for keep speaking**

## 🦄 A Mission in front a problem 🧟‍♀️

In my city, as in many other cities, the internet has a low bandwidth, and when tourists visit it, they may find it difficult to access applications that consume too much data, but messenger continues to work despite having an internet of low bandwidth and the fact of integrating a translation solution, in a messenger conversation it could help people who are traveling or who live in remote regions and who want to learn another language ✨ if you see something that I can fix or integrate I'm open for feedback 😊 

## 🔮 Architecture

I create a webhook through the use of node and express, I exposed my local host to the facebook webhook with ngrok, through which I send and receive the requests to messenger, when I receive a specific request For a translation I consume an internal service that I use to call the google translations API, I clean the request and send an input back, some of the requests I send them as json to IA Platform where I use them for self-training and the result I return it as a json to be able to use it in some future. The part of the images I receive the request, if when I receive it I detect it as an image I receive it, I send it to my service and I consume the image processing api to be able to detect the elements of the image.

<img src="https://raw.githubusercontent.com/L3ts-H4ck/sayme-messenger/master/architecture.png" width="75%" title="hover text">

## 👨🏻‍💻 Tech Stack

- ✅ Messenger Platform
- ✅ Ngrok
- ✅ Node.js
- ✅ Express
- ✅ IA Platform
- ✅ Vision API
- ✅ Natural Language API

## 👩🏻‍🔬 What I learned
In this awesome travel between different assistants platforms and ecosystems I take the opportunity to create awesome things with the use of messenger , a backend core build in node.js and express and build a IA model with the use of IA Platform ( Google Cloud Platform )

## 📝 What's next for Sayme
- ✨ Add new languajes
- ✨ Training with a big data set
- ✨ Increase Vocabulary
- ✨ Add a Learning Mode

## 🐨 fun facts
When I was testing on the subway, I fell down the stairs 😭.

## Test and tell me what do you think ?

m.me/okeysayme


## License

`Sayme` is a public domain work, dedicated using [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). Feel free to do whatever you want with it.


## Use the js Core to build a mesenger chatbot

#### Download Project
  
    $ git clone https://github.com/L3ts-H4ck/sayme-messenger.git
    
#### Install dependencies

    $ cd  sayme-messenger
    $ npm install 
    
#### Loading environment variables

Please read the following information : https://dev.to/deammer/loading-environment-variables-in-js-apps-1p7p

    $ touch .env
    $ code .env
