const authUser = (permissiom) => {
  return (req, res, next) => {
    if (!req.session.login) {
      return res.status(403).json("You need login");
    }
    const userId = req.session.userId;

    const role = req.session.userRole;
    if (role === 1) {
      return next();
    }
    if (role === 0) {
      const userId = req.session.userId;
      const id = req.params.id ? req.params.id : req.query.id;

      if (id !== userId.toString()) {
        return res.status(401).json({
          message: "You can only view and edit your own account information!",
        });
      }

      return next();
    }

    return res.status(401).json({ message: "You don't have permission!" });
  };
};

module.exports = { authUser };
