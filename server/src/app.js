const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const notFound = require("./middleware/notFound.middleware");
const errorHandler = require("./middleware/error.middleware");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "BuilderOS API Running",
  });
});

app.use(notFound);
app.use(errorHandler);



module.exports = app;