"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _mongo = require("@/lib/mongo");

// import { getUsers } from "@/lib/mongo/users";
function handler(req, res) {
  var _ref, db, data;

  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _mongo.connectToDatabase)());

        case 2:
          _ref = _context.sent;
          db = _ref.db;
          _context.next = 6;
          return regeneratorRuntime.awrap(db.collection("Users").find({}).limit(20).toArray());

        case 6:
          data = _context.sent;
          res.json(data);

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}
//# sourceMappingURL=index.dev.js.map
