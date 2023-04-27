"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _index = require("../../../lib/mongo/index");

// import { getUsers } from "@/lib/mongo/users";
// const userHandler =async (request : any, response : any) => {
//     if (request.method === "GET") {
//         try {
//             const { users, error } = await getUsers();
//             if (error) { throw new Error(error); }
//             return response.status(200).json({ users });
//         } catch (error : any) {
//             return response.status(500).json({ error : error.message });
//         }
//     }
//     response.setHeader("Allow", ["GET"]);
//     response.status(425).end(`Method ${ request.method } is not allowed`);
// };
// export default userHandler;
function handler(req, res) {
  var _ref, db, data;

  return regeneratorRuntime.async(function handler$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap((0, _index.connectToDatabase)());

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
} // export async function GET(request: Request) {
//     const { db } = await connectToDatabase();
//     const data = await db.collection("Users").find({}).limit(20).toArray();
//     return new Response(data)
//   }
//# sourceMappingURL=route.dev.js.map
