"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectToDatabase = void 0;

var _mongodb = require("mongodb");

var _process$env = process.env,
    MONGODB_URI = _process$env.MONGODB_URI,
    MONGODB_DB_ONE = _process$env.MONGODB_DB_ONE;

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODC_URI in .env.local");
}

if (!MONGODB_DB_ONE) {
  throw new Error("Please define the MONGODB_DB  in .env.local");
}

var cachedConnection = global.mongo;

if (!cachedConnection) {
  cachedConnection = global.mongo = {
    conn: null,
    promise: null
  };
}

var connectToDatabase = function connectToDatabase() {
  var options;
  return regeneratorRuntime.async(function connectToDatabase$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!cachedConnection.conn) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return", cachedConnection.conn);

        case 2:
          if (cachedConnection.promise) {
            _context.next = 7;
            break;
          }

          options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
          };
          _context.next = 6;
          return regeneratorRuntime.awrap(_mongodb.MongoClient.connect(MONGODB_URI, options).then(function (client) {
            return {
              client: client,
              db_one: client.db(MONGODB_DB_ONE)
            };
          }));

        case 6:
          cachedConnection.promise = _context.sent;

        case 7:
          _context.next = 9;
          return regeneratorRuntime.awrap(cachedConnection.promise);

        case 9:
          cachedConnection.conn = _context.sent;

        case 10:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.connectToDatabase = connectToDatabase;
//# sourceMappingURL=index.dev.js.map
