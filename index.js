const bcrypt = require("bcrypt");

const getPassword = async () => {
  const salt = await bcrypt.genSalt(10);
  const newPassword = bcrypt.hashSync("asdfasdfasd", salt);
  console.log(newPassword);
};

getPassword();
