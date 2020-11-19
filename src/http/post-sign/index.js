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
        Subject: "Nouvelle inscription !",
        TemplateID: 1482189,
        TemplateLanguage: true,
        Variables: {
          type: body.type,
          firstName: body.firstName,
          lastName: body.lastName,
          email: body.email,
          phone: body.phone,
          details: body.details,
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
