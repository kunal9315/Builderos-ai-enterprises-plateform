const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");

const notFound = require("./middleware/notFound.middleware");
const errorHandler = require("./middleware/error.middleware");
const authRoutes = require("./routes/auth.routes");

const app = express();

const allowedOrigins = {
  development: "http://localhost:5173",
  production: "https://builderos-ai-enterprises-plateform.vercel.app",
};

const corsOptions = {
  origin: allowedOrigins[process.env.NODE_ENV] || "http://localhost:5173",
  credentials: true,
};

app.use(cors(corsOptions));

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