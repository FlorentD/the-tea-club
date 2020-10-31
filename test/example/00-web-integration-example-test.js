let test = require("tape");
let tiny = require("tiny-json-http");
let sandbox = require("@architect/sandbox");
let url = "http://localhost:6666";

/**
 * Sandbox / http test
 * - Demonstrates execising basic web integration tests using the local dev server
 */
test("Set up env", (t) => {
  t.plan(1);
  t.ok(sandbox, "sandbox loaded");
});
