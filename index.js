import Express from "express";
import Dbconnection from "./database/db.js";
import DefaultData from "./default.js";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/route.js";

const app = Express();

const PORT = process.env.PORT || 8000;

DefaultData();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

app.listen(PORT, () => {
  console.log("app listening in port", PORT);
});

Dbconnection();

