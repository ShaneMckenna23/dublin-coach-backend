"use strict";

var _app = require("./app");

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = process.env.PORT || 8080;
const host = process.env.HOSTNAME || "0.0.0.0";

// Launch Node.js server
const server = _app2.default.listen(port, host, () => {
  console.log(`Node.js API server is listening on http://${host}:${port}/`);
});

// Shutdown Node.js app gracefully
function handleExit(options, err) {
  if (options.cleanup) {
    const actions = [server.close];
    actions.forEach((close, i) => {
      try {
        close(() => {
          if (i === actions.length - 1) process.exit();
        });
      } catch (err) {
        if (i === actions.length - 1) process.exit();
      }
    });
  }
  if (err) console.log(err.stack);
  if (options.exit) process.exit();
}

process.on("exit", handleExit.bind(null, { cleanup: true }));
process.on("SIGINT", handleExit.bind(null, { exit: true }));
process.on("SIGTERM", handleExit.bind(null, { exit: true }));
process.on("uncaughtException", handleExit.bind(null, { exit: true }));
//# sourceMappingURL=server.js.map