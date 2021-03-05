import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

import indexRouter from "./routes/index.mjs";
import usersRouter from "./routes/users.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "../client/build")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

export default app;
