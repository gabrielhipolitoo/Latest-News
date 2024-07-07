import express from "express";
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
    app.use(express.json());
    app.use(
      express.urlencoded({
        extended: true,
      }),
    );
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
      console.log("servidor rodando");
    });
    return {
      //null
    };
  }

  routes(app) {
    app.get("/", (req, res) => {
      res.render("index", { lengthSubscribe: 2 });
    });

    app.post("/subscribe", (req, res) => {
      const { email } = req.body;
      res.redirect("/subscribe");
    });

    app.get("/subscribe", (req, res) => {
      res.render("subscribe");
    });
  }
}

const startar = new Server();
