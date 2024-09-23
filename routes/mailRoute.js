const { sendMail } = require("../controllers/sendMail");

const route = require("express").Router();

route.post("/mail", sendMail);

module.exports = route;
