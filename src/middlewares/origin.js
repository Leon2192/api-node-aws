const checkSession = (req, res, next) => {
  const headerAuth = req.headers.authorization || "";
  const token = headerAuth.split(" ").pop();

  if (!token) {
    res.status(405);
    res.send({ error: "No tienes token" });
  } else {
    next();
  }
};

module.exports = { checkSession };
