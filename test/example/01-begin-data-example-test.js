let test = require("tape");
let data = require("@begin/data");

test("Set up env", (t) => {
  t.plan(4);
  t.ok(data, "Begin Data loaded");
  t.ok(data.get, "data.get ready");
  t.ok(data.set, "data.set ready");
  t.ok(data.destroy, "data.destroy ready");
});
