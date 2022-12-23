import express from "express";
import { initTaskRoutes } from "../modules/task/task-routes.js";

const PORT = 3001;

const app = express();

app.listen(PORT, function () {
  console.log("listening on 3001!");
});

initTaskRoutes(app);
