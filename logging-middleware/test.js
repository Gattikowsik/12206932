const { Log } = require("./log.js");

Log("backend", "error", "handler", "received string, expected bool");
Log("server", "warn", "service", "This should fail due to invalid stack");
Log("frontend", "info", "component", "User profile rendered successfully");
