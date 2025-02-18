import jwt from "jsonwebtoken";

export const generateToken = (user, res) => {
  const token = jwt.sign(
    { userId: user._id, isAdmin: user.isAdmin }, // Include isAdmin in the token payload
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
    httpOnly: true, // Prevent XSS attacks
    sameSite: "strict", // Protect against CSRF attacks
    secure: process.env.NODE_ENV !== "development", // Use HTTPS in production
  });

  return token;
};
