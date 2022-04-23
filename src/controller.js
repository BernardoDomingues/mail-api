const { mailService } = require("./services");

const mailController = async (req, res) => {
  const { recipient } = req.params;

  const mail = await mailService(recipient);

  res.send({
    status: true,
    description: mail,
  });
};

module.exports = { mailController };