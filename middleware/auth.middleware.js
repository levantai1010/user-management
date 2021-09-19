const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
  const token = req.header("token");
  try {
    const secrectKey = "secrect";
    const decode = jwt.verify(token, secrectKey);
    if (decode) {
      req.user = decode;
      next();
    } else {
      res.status(401).send("Login failed");
    }
  } catch (error) {
    res.status(401).send("Login failed");
  }
};
const authorize = (arrRole) => (req, res, next) => {
  const { user } = req;
  if (arrRole.findIndex((ele) => ele === user.role) > -1) {
    next();
  } else {
    res.status(403).send("Not permission");
  }
};
module.exports = { authenticate, authorize };
