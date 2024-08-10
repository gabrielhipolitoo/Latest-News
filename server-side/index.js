import express from "express";
import routes from "./routes/routes.js";
import cors from "cors";
import db from "./database/db.js";
import path from "path";
import { engine } from "express-handlebars";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Server {
  constructor() {
    const { app, port } = this.configServer();
    this.startServer(app, port);
    this.routes(app);
  }

  configServer() {
    const app = express();
    const port = 3000;
    const corsOpt = {
      origin: "*",
      credentials: true, //access-control-allow-credentials:true
      optionSuccessStatus: 200,
    };
    
    app.use(express.json());
    app.use(
      express.urlencoded({
        extended: true,
      }),
    );
    app.use(cors(corsOpt));
    app.use(express.static("public"));
    app.set("view engine", "handlebars");
    app.engine("handlebars", engine());
    app.set("views", path.join(__dirname, "public/views"));

    return {
      app,
      port,
    };
  }

  startServer(app, port) {
    app.listen(port, () => {
      db();
      console.log("servidor rodando");
    });
    return {
      //null
    };
  }

  routes(app) {
    app.use(routes);
  }
}

const startar = new Server();
