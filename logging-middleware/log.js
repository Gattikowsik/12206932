// log.js
import axios from "axios";

const VALID_STACKS = ["backend", "frontend"];
const VALID_LEVELS = ["debug", "info", "warn", "error", "fatal"];
const VALID_PACKAGES = {
  backend: [
    "cache", "controller", "cron_job", "db", "domain", "handler",
    "repository", "route", "service",
  ],
  frontend: [
    "api", "component", "hook", "page", "state", "style",
  ],
  both: ["auth", "config", "middleware", "utils"]
};

export async function Log(stack, level, packageName, message) {
  if (!VALID_STACKS.includes(stack)) {
    console.error("Invalid stack provided");
    return;
  }

  if (!VALID_LEVELS.includes(level)) {
    console.error("Invalid level provided");
    return;
  }

  const allowedPackages = [...VALID_PACKAGES[stack], ...VALID_PACKAGES.both];
  if (!allowedPackages.includes(packageName)) {
    console.error("Invalid package name for the selected stack");
    return;
  }

  try {
    const response = await axios.post("http://20.244.56.144/evaluation-service/logs", {
      stack,
      level,
      package: packageName,
      message,
    });

    console.log("Log created:", response.data);
  } catch (error) {
    console.error("Failed to log:", error.message);
  }
}
