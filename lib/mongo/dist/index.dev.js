"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectToDatabase = connectToDatabase;

var _mongodb = require("mongodb");

var _process$env = process.env,
    MONGODB_URI = _process$env.MONGODB_URI,
    MONGODB_DB = _process$env.MONGODB_DB;

if (!MONGODB_URI) {
  throw Error("Please define the MONGODB_URI environment variable in .env.local");
}

if (!MONGODB_DB) {
  throw Error("Please define the MONGODB_DB enrironment variable in the .env.local");
}

var cached = global.mongo;

if (!cached) {
  cached = global.mongo = {
    conn: null,
    promise: null
  };
}

function connectToDatabase() {
  var options;
  return regeneratorRuntime.async(function connectToDatabase$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!cached.conn) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", cached.conn);

        case 2:
          if (!cached.promise) {
            options = {
              useNewUrlParser: true,
              useUnifiedTopology: true
            };
            cached.promise = _mongodb.MongoClient.connect(MONGODB_URI, options).then(function (client) {
              return {
                client: client,
                db: client.db(MONGODB_DB)
              };
            });
          }

          _context.next = 5;
          return regeneratorRuntime.awrap(cached.promise);

        case 5:
          cached.conn = _context.sent;
          return _context.abrupt("return", cached.conn);

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}
//# sourceMappingURL=index.dev.js.map
