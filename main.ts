import { createRequire } from "https://deno.land/std@0.82.0/node/module.ts";
import type ChangeCase from "change-case";
import type Events from "events";

const require = createRequire(import.meta.url);

// Require a Node.js polyfill.
const { EventEmitter } = require("events") as typeof Events;
// Require an npm module from `node_modules`.
const { constantCase } = require("change-case") as typeof ChangeCase;
// Require a local CommonJS module.
const myFunction = require("./my-module");

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("event", () => {
  console.log(myFunction(constantCase("world")));
});

myEmitter.emit("event");
