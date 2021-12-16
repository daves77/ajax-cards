const bcrypt = require("bcrypt");

const SALT = process.env.SALT;

const hashPassword = async (password) => {
    const hashedPassword = bcrypt.hash(password, SALT);
    return hashedPassword;
};

const comparePassword = async (password, hashedPassword) => {
    const result = await bcrypt.compare(password, hashedPassword);

    return result;
};

module.exports = { hashPassword, comparePassword };
