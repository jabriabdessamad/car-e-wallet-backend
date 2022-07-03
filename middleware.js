const jwt = require("jsonwebtoken");
const config = require("./config/config");

const checkToken = (req, res, next) => {
  let token = req.headers["authorization"];
  console.log(token);
  token = token.slice(6, token.lenght);
  if (token) {
    jwt.verify(token, config.key, (err, decoded) => {
      if (err) {
        return res.json({
          status: false,
          msg: "token is invalid",
        });
      } else {
        req.decoded = decoded;
      }
    });
  } else {
    return res.json({
      status: false,
      msg: "token is not provided",
    });
  }
  next();
};

module.exports = {
  checkToken: checkToken,
};
