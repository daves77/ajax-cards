const express = require("express");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3001;

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Listening @ Port ${PORT}`);
});
