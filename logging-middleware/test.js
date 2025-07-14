// test.js
const { Log } = require("./log.js");

// Example 1: Valid log
Log("backend", "error", "handler", "received string, expected bool");

// Example 2: Invalid stack
Log("server", "warn", "service", "This should fail due to invalid stack");

// Example 3: Valid frontend log
Log("frontend", "info", "component", "User profile rendered successfully");
