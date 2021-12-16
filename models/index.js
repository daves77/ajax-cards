const Sequelize = require("sequelize").Sequelize;
const initGameModel = require("./game.js");
const initUserModel = require("./user.js");

const allConfig = require("../config/config.js");

const env = process.env.NODE_ENV || "development";
const config = allConfig[env];

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

const db = {};

db.User = initUserModel(sequelize, Sequelize.DataTypes);
db.Game = initGameModel(sequelize, Sequelize.DataTypes);

db.User.belongsToMany(db.Game, { through: "game_users" });
db.Game.belongsToMany(db.User, { through: "game_users" });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
