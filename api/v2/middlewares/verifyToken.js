import jwt from 'jsonwebtoken';

function verifyToken(req, res, next) {
  const bearerHeader = req.headers.authorization;
  jwt.verify(bearerHeader, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    req.usermail = decoded.email;
    req.userid = decoded.id;
    next();
  });
}
export default verifyToken;
