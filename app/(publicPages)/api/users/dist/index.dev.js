"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _users = require("@/lib/mongo/users");

// import { NextApiRequest, NextApiResponse } from 'next';
// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   const data = await fetch('http://localhost:3000/api/users');
//   const json = await data.json();
//   res.json(json);
// };
// export { handler }
// export async function GET(request: Request) {
//   // const data = await fetch('http://localhost:3000/api/users');
//   // const json = await data.json();
//   const response : Response = new Response("Hello");
//   return response
// }
var handler = function handler(req, res) {
  var _ref, users, error;

  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(req.method === "GET")) {
            _context.next = 15;
            break;
          }

          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap((0, _users.getUsers)());

        case 4:
          _ref = _context.sent;
          users = _ref.users;
          error = _ref.error;

          if (!error) {
            _context.next = 9;
            break;
          }

          throw new Error(error);

        case 9:
          return _context.abrupt("return", res.status(200).json({
            users: users
          }));

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", res.status(500).json({
            error: _context.t0.message
          }));

        case 15:
          res.setHeader("Allow", ["GET"]);
          res.status(425).end("Method ".concat(req.method, " is not allowed"));

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 12]]);
};

var _default = handler;
exports["default"] = _default;
//# sourceMappingURL=index.dev.js.map
