// import jwt from 'jsonwebtoken'
// const verifyToken = (req,res,next) => {
// try {
// const token =   req.cookies.token
// console.log(token)

// const decoded =  jwt.verify(token , process.env.JWT_SECRET_STRING)
// console.log(decoded)
// } catch (error) {
   
// }
// }
 
// export default verifyToken
import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    // ✅ Get token from cookies OR Authorization header
    let token = req.cookies.token;

    if (!token && req.headers.authorization?.startsWith("Bearer")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    // ✅ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_STRING);

    console.log("DECODED:", decoded);

    // ✅ Attach user to request
    req.user = decoded;

    // ✅ Move to next middleware
    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
      error: error.message,
    });
  }
};

export default verifyToken;