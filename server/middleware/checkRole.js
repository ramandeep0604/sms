// export const checkRole= (allowedRoles)=>{
// return(req,res,next)=>{
// console.log(req.user);
// if(!allowedRoles.includes(req.user.role)){
//     return res.status(403).json({message:"you are not allowed to access this role"})
// }

// }
// }
export const checkRole = (allowedRoles) => {
  return (req, res, next) => {

    console.log("USER:", req.user);

    // ✅ Check if user exists
    if (!req.user) {
      return res.status(401).json({
        message: "User not authenticated",
      });
    }

    // ✅ Check role
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({
        message: "Access denied: insufficient role",
      });
    }

    // ✅ Continue
    next();
  };
};