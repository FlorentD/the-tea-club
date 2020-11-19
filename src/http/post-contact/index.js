let arc = require("@architect/functions");
let mailjet = require("node-mailjet").connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

let parseBody = arc.http.helpers.bodyParser;

exports.handler = async function http(request) {
  let body = parseBody(request);
  await mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "contact@theteaclub.fr",
          Name: "The Tea Club",
        },
        To: [
          {
            Email: "florent.duveau@gmail.com",
            Name: "Florent DUVEAU",
          },
          {
            Email: "debtheteaclub@gmail.com",
            Name: "Déborah WACK",
          },
        ],
        Subject: "Nouveau mail de contact !",
        TemplateID: 1471759,
        TemplateLanguage: true,
        Variables: {
          email: body.email,
          message: body.message,
        },
      },
    ],
  });
  return {
    headers: {
      "content-type": "application/json; charset=utf8",
      "cache-control":
        "no-cache, no-store, must-revalidate, max-age=0, s-maxage=0",
    },
    body: JSON.stringify(body),
  };
};
