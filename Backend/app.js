const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const mustacheExpress = require("mustache-express");
const cookieParser = require("cookie-parser");

//Routes
const principalRoutes = require("./routes/principal");
const courseRoutes = require("./routes/course");
const announcementsRoutes = require("./routes/announcements");
const gradesRoutes = require("./routes/grades");

const app = express();
const port = 3000;
const dataBaseUrl =
  "mongodb+srv://luisda1905:mnbvcxz11@cluster0.chxbhvc.mongodb.net/?retryWrites=true&w=majority";
let corsOPtions = {
  origin: "https://localhost:" + port,
};

const sessionConfig = {
  secret: "fgdfgdgdgjhdvfsgrn3464gfd",
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 * 60 * 24, secure: true },
};

//App configs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOPtions));
app.use(session(sessionConfig));
app.use(cookieParser());

//Routes
app.use("/", principalRoutes);
app.use("/course", courseRoutes);
app.use("/course/:courseID/news", announcementsRoutes);
app.use("/course/:courseID/grades", gradesRoutes);

//App view engine configuration
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", "./views");

async function main() {
  await mongoose.connect(dataBaseUrl);
}
main().then(() => console.log("Connected to database"));
main().catch((err) => console.log(err));

app.listen(port, () => console.log("Connected on port 3000"));
