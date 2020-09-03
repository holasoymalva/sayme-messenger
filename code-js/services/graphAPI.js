require('dotenv').config();
const request = require("request");


exports.callSendAPI = (requestBody) => {
    // Enviamos petición a Messenger Platform
    const url= `https://graph.facebook.com/v3.3/me/messages`;
    request(
        {
          uri: url,
          qs: {
            access_token: process.env.PAGE_ACCESS_TOKEN,
          },
          method: "POST",
          json: requestBody
        },
        
        (error, _res, body) => {
            if (!error) {
              console.log("Request sent:", body);
            } else {
              console.error("Unable to send message:", error);
            }
          }
      );
}

exports.getPorfile = (senderID) => {
  // Enviamos petición para traer los datos del Public Profile
  const url= `https://graph.facebook.com/v3.3/${senderID}`;
  request(
      {
        uri: url,
        qs: {
          access_token: process.env.PAGE_ACCESS_TOKEN,
          fields: "first_name, last_name, gender, locale, timezone"
        },
        method: "GET",
      },
      (error, _res, body) => {
          if (!error) {
            console.log("Request sent:", body);
          } else {
            console.error("Unable to send message:", error);
          }
        }
    );
    return data.first_name;
}

