const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("abc", (data) => {
    console.log("🚀 ~ file: EventEmitter.js:6 ~ myEmitter.on ~ data:", data)
});

myEmitter.emit("abc","hello world")