const test = require("node:test");
const assert = require("node:assert");

const hello = require("../lib/hello-commonjs");

test("Success test", async (t) => {
  assert.strictEqual(hello.say(), "Hello, commonJS!");
});
