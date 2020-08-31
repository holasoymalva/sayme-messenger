<img src="https://raw.githubusercontent.com/L3ts-H4ck/sayme-messenger/master/Pink%20and%20Blue%20Abstract%20Moms%20Influencer%20Freestyle%20Art%20Facebook%20Cover.png" width="100%" title="hover text">

# 🎒 Sayme

**Assistant for travers** , with the use of translations an image processing.

## 🦄 My Mission in front a problem 🧟‍♀️

In some countries the internet signal is too poor so if we travel , we can have a problem to trasnlate using convenctional apps for translation, but with the use of messenger we onli need the necesary internet to send a message and recibe a translation. I build an awesome assistant to translate conversations with a low signal of internet. 

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
In this awesome travel between different assistants platforms and ecosystems i take the opportunity to create awesome things with the use of messenger , a backend core build in node.js and express and build a IA model with the use of IA Platform ( Google Cloud Platform )

## 📝 What's next for Sayme
- ✨ Add new languajes
- ✨ Training with a big data set
- ✨ Increase Vocabulary
- ✨ Add a Learning Mode

## 🐨 fun facts
When I was testing on the subway, I fell down the stairs 😭.

## Test and tell me what do you think ?

m.me/okeysayme
