const home = async (req, res) => {
  try {
    console.log(req.body);
    res
      .status(200)
      .send(
        "welcome to world best mern series by thapa technical using routes"
      );
  } catch (error) {
    console.log(error);
  }
};


const register = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({ message: req.body });
  } catch (error) {
    res.status(500).json("INTERNAL SERVER ERROR");
  }
};

module.exports = { home, register };
