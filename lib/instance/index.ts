/* eslint-disable @typescript-eslint/no-require-imports */
import { AuthModel } from "./../models/auth/auth.model";
import { Sequelize } from "sequelize-typescript";
require("dotenv").config();

const db = process.env.DB_NAME;
const username = process.env.USERNAME;
const password = process.env.PASSWORD;

const connection = new Sequelize(db, username, password, {
  dialect: "mysql",
  port: 3306,
  models: [AuthModel],
});

connection.authenticate();

export default connection;
